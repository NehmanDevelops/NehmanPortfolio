# Contact Form Setup Guide

Your contact form needs to be configured to send emails. Here are two easy options:

## Option 1: Web3Forms (Easiest - Recommended)

1. **Go to** https://web3forms.com
2. **Enter your email**: nehmanmain@gmail.com
3. **Copy your Access Key**
4. **Update the code**: 
   - Open `src/components/Contact.jsx`
   - Find the line with `access_key: "5f5b91cf-2fc6-4dc3-9cd2-dc8838e33f09"`
   - Replace it with your new access key
5. **Test it!** The form should now send emails to your inbox.

**Free tier**: 250 submissions/month

---

## Option 2: EmailJS (More Control)

1. **Sign up** at https://www.emailjs.com/ (free account)
2. **Create an Email Service**:
   - Go to "Email Services" → "Add New Service"
   - Choose Gmail (or your email provider)
   - Connect your email account
   - Copy the **Service ID**
3. **Create an Email Template**:
   - Go to "Email Templates" → "Create New Template"
   - Use this template:
     ```
     From: {{from_name}} ({{from_email}})
     Reply-To: {{reply_to}}
     To: nehmanmain@gmail.com
     
     Subject: Contact Form Submission from {{from_name}}
     
     Message:
     {{message}}
     ```
   - Copy the **Template ID**
4. **Get your Public Key**:
   - Go to "Account" → "General"
   - Copy your **Public Key**
5. **Update the code**:
   - Open `src/components/Contact.jsx`
   - Replace these values:
     - `YOUR_SERVICE_ID` → Your Service ID
     - `YOUR_TEMPLATE_ID` → Your Template ID
     - `YOUR_PUBLIC_KEY` → Your Public Key
6. **Test it!**

**Free tier**: 200 emails/month

---

## Quick Test

After setup, test the form by:
1. Filling out the contact form on your website
2. Submitting it
3. Checking your email inbox (and spam folder)

If it doesn't work, check the browser console for error messages.

