<template>
    <article class="contact active">
    <header>
        <h2 class="h2 article-title">Contact Form</h2>
    </header>
    <section class="contact-form">

        <form @submit.prevent="handleSendMessage" class="form">

        <div class="input-wrapper">
            <input type="text" name="fullname" class="form-input" placeholder="Full name" required v-model="fullName">

            <input type="email" name="email" class="form-input" placeholder="Email address" required v-model="email">
        </div>

        <textarea name="message" class="form-input" placeholder="Your Message" required v-model="message"></textarea>

        <button class="form-btn" type="submit" :class="{disabled: pending}">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            <span ref="sendBtn">Send Message</span>
        </button>
        <span class="response" v-if="response">{{ response }}</span>
        </form>

    </section>

    </article>
</template>

<script>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
export default {
    setup() {
        const fullName = ref('')
        const email = ref('')
        const message = ref('')
        const sendBtn = ref(null)
        const pending = ref(false)
        const response = ref('')

        emailjs.init("7fnxL-HlMUcrNcKjQ")
        const handleSendMessage = async () => {
          const templateParams = {
            from_name: fullName.value,
            from_address: email.value,
            message: message.value
          }
          try {
            response.value = ''
            sendBtn.value.innerHTML = "Sending"
            pending.value = true
            await emailjs.send("service_plzygl6", "template_7rgehhp", templateParams)
            pending.value = false
            sendBtn.value.innerHTML = "Send Message"
            fullName.value = ''
            email.value = ''
            message.value = ''
            response.value = "I have received your message. Thank you for reaching out!"
          } catch (e) {
            response.value = "Server error. Sorry, please email me at menghanma@gmail.com ;)"
          }
        }

        return { fullName, email, message, handleSendMessage, sendBtn, pending, response }
    }
}
</script>

<style scoped>
.contact .article-title { 
  margin-top: 80px;
}

.contact-form { margin-bottom: 10px; }

.input-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.form-input {
  color: var(--white-2);
  font-size: var(--fs-6);
  font-weight: var(--fw-400);
  padding: 13px 20px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  outline: none;
}

.form-input::placeholder { font-weight: var(--fw-500); }

.form-input:focus { border-color: var(--orange-yellow-crayola); }

textarea.form-input {
  min-height: 100px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
  margin-bottom: 25px;
}

textarea.form-input::-webkit-resizer { display: none; }

.form-input:focus:invalid { border-color: var(--bittersweet-shimmer); }

.form-btn {
  position: relative;
  width: 100%;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  font-size: var(--fs-6);
  text-transform: capitalize;
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);
}

.form-btn::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}

.form-btn ion-icon { font-size: 16px; }

.form-btn:hover { background: var(--bg-gradient-yellow-1); }

.form-btn:hover::before { background: var(--bg-gradient-yellow-2); }

.form-btn.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-btn.disabled:hover { background: var(--border-gradient-onyx); }

.form-btn.disabled:hover::before { background: var(--bg-gradient-jet); }

.response {
  color: white;
  margin-top: 16px;
}

</style>>

