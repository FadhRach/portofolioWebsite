// Supabase configuration
const SUPABASE_URL = 'https://hzvkhmmguhpuwsntdjmi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dmtobW1ndWhwdXdzbnRkam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzQ2MjEsImV4cCI6MjA2Njc1MDYyMX0.dqKHG15nrfEMxYvYK4TEgOZjreDvkNuDRL3OEz2fvro';

// Initialize Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

class ContactManager {
  constructor() {
    this.messages = [];
    this.init();
  }

  async init() {
    await this.testConnection();
    this.initForm();
    await this.loadMessages();
    this.startAutoRefresh();
  }

  async testConnection() {
    try {
      const { error: connectionError } = await supabaseClient
        .from('Messages')
        .select('count')
        .limit(1);
      
      if (connectionError) {
        console.error('Connection failed:', connectionError);
        return false;
      }
      
      const testData = {
        name: 'Connection Test',
        email: 'test@connection.com',
        subject: 'Permission Test',
        description: 'Testing insert permissions'
      };
      
      const { data: insertTest, error: insertError } = await supabaseClient
        .from('Messages')
        .insert([testData])
        .select();
      
      if (insertError) {
        console.error('Insert permission failed:', insertError);
        return false;
      }
      
      // Clean up test data
      if (insertTest && insertTest[0]) {
        await supabaseClient
          .from('Messages')
          .delete()
          .eq('id', insertTest[0].id);
      }
      
      return true;
      
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit(e);
    });
  }

  async handleSubmit(e) {
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitLoading = document.getElementById('submit-loading');
    
    // Show loading state
    submitBtn.disabled = true;
    submitText?.classList.add('hidden');
    submitLoading?.classList.remove('hidden');

    try {
      const formData = new FormData(e.target);
      const messageData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        description: formData.get('message'),
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabaseClient
        .from('Messages')
        .insert([messageData])
        .select();

      if (error) throw error;

      this.showSuccess();
      e.target.reset();
      await this.loadMessages();

    } catch (error) {
      console.error('Error sending message:', error);
      
      if (error.code === '42501' || error.message.includes('policy')) {
        this.showError('Permission denied. Please contact administrator.');
      } else if (error.code === 'PGRST116') {
        this.showError('Table not found. Please contact administrator.');
      } else {
        this.showError(error.message || 'Failed to send message. Please try again.');
      }
    } finally {
      submitBtn.disabled = false;
      submitText?.classList.remove('hidden');
      submitLoading?.classList.add('hidden');
    }
  }

  showSuccess() {
    const successDiv = document.getElementById('form-success');
    const errorDiv = document.getElementById('form-error');
    
    if (!successDiv) return;
    
    errorDiv?.classList.add('hidden');
    successDiv.classList.remove('hidden');
    
    setTimeout(() => {
      successDiv.classList.add('hidden');
    }, 5000);
  }

  showError(message) {
    const successDiv = document.getElementById('form-success');
    const errorDiv = document.getElementById('form-error');
    const errorMessage = document.getElementById('error-message');
    
    if (!errorDiv) return;
    
    successDiv?.classList.add('hidden');
    if (errorMessage) errorMessage.textContent = message;
    errorDiv.classList.remove('hidden');
    
    setTimeout(() => {
      errorDiv.classList.add('hidden');
    }, 5000);
  }

  async loadMessages() {
    try {
      const { data, error } = await supabaseClient
        .from('Messages')
        .select('id, name, subject, created_at')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error loading messages:', error);
        return;
      }

      this.messages = data || [];
      this.renderRunningMessages();
      this.updateStats();

    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }

  renderRunningMessages() {
    const container = document.getElementById('running-messages');
    if (!container) return;

    if (this.messages.length === 0) {
      container.innerHTML = `
        <div class="message-item">
          <div class="message-avatar bg-gray-500/20 text-gray-400">
            📭
          </div>
          <div class="message-content">
            <div class="message-name">No messages yet</div>
            <div class="message-subject">Be the first to send a message!</div>
          </div>
        </div>
      `;
      return;
    }

    const duplicatedMessages = [...this.messages, ...this.messages];
    
    const messagesHTML = duplicatedMessages.map(message => {
      const avatarLetter = message.name.charAt(0).toUpperCase();
      const colors = ['violet', 'cyan', 'pink', 'emerald', 'orange', 'blue', 'rose', 'indigo'];
      const colorIndex = message.name.length % colors.length;
      const color = colors[colorIndex];
      
      return `
        <div class="message-item">
          <div class="message-avatar bg-${color}-500/20 text-${color}-400 border border-${color}-500/30">
            ${avatarLetter}
          </div>
          <div class="message-content">
            <div class="message-name">${this.escapeHtml(message.name)}</div>
            <div class="message-subject">${this.escapeHtml(message.subject)}</div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = messagesHTML;
  }

  updateStats() {
    const messageCount = document.getElementById('message-count');
    const lastUpdated = document.getElementById('last-updated');
    
    if (messageCount) {
      const count = this.messages.length;
      messageCount.textContent = `${count} Message${count !== 1 ? 's' : ''}`;
    }
    
    if (lastUpdated) {
      lastUpdated.textContent = 'Just updated';
      
      setTimeout(() => {
        lastUpdated.textContent = 'Just now';
      }, 3000);
    }
  }

  startAutoRefresh() {
    setInterval(() => {
      this.loadMessages();
    }, 30000);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.contactManager = new ContactManager();
});

// Debug functions
window.testCreate = async () => {
  const testMessage = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Console Test',
    description: 'This is a test from console'
  };
  
  const { data, error } = await supabaseClient
    .from('Messages')
    .insert([testMessage])
    .select();
  
  console.log('Test create result:', { data, error });
  
  if (error) {
    console.error('Create failed:', error.message);
    if (error.code === '42501') {
      console.log('Run: ALTER TABLE "Messages" DISABLE ROW LEVEL SECURITY;');
    }
  } else {
    window.contactManager.loadMessages();
  }
};

window.testRead = async () => {
  const { data, error } = await supabaseClient
    .from('Messages')
    .select('*');
  
  console.log('Test read result:', { data, error });
};

window.fixPermissions = () => {
  console.log('Run this in Supabase SQL Editor:');
  console.log('ALTER TABLE "Messages" DISABLE ROW LEVEL SECURITY;');
};