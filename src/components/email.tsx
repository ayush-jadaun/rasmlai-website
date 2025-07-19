

// Email template component
const WaitlistEmail = ({ name, queueNumber }:{name:string, queueNumber:number}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Rasmlai - Your Journey Begins Here</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', Arial, sans-serif;
                line-height: 1.6;
                color: #374151;
                background-color: #fef2f2;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .header {
                background: linear-gradient(135deg, #dc2626, #ec4899);
                padding: 40px 30px;
                text-align: center;
                color: white;
            }
            
            .logo {
                font-family: 'Poppins', sans-serif;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 10px;
                letter-spacing: 2px;
            }
            
            .tagline {
                font-size: 16px;
                opacity: 0.9;
                margin-bottom: 0;
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .greeting {
                font-size: 24px;
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 20px;
            }
            
            .queue-card {
                background: linear-gradient(135deg, #fef2f2, #fce7f3);
                border: 2px solid #fecaca;
                border-radius: 12px;
                padding: 30px;
                text-align: center;
                margin: 30px 0;
            }
            
            .queue-number {
                font-size: 48px;
                font-weight: 800;
                color: #dc2626;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 10px;
            }
            
            .queue-text {
                font-size: 16px;
                color: #6b7280;
                margin-bottom: 15px;
            }
            
            .total-users {
                font-size: 14px;
                color: #9ca3af;
                font-style: italic;
            }
            
            .message {
                font-size: 16px;
                margin-bottom: 20px;
                color: #4b5563;
            }
            
            .features {
                background-color: #f9fafb;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
            }
            
            .features h3 {
                font-size: 18px;
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 15px;
                font-family: 'Poppins', sans-serif;
            }
            
            .feature-item {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
                font-size: 14px;
                color: #6b7280;
            }
            
            .feature-icon {
                background: linear-gradient(135deg, #dc2626, #ec4899);
                color: white;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                font-size: 12px;
                flex-shrink: 0;
            }
            
            .cta-section {
                text-align: center;
                margin: 30px 0;
            }
            
            .social-links {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-top: 25px;
            }
            
            .social-link {
                display: inline-block;
                padding: 10px;
                background: linear-gradient(135deg, #dc2626, #ec4899);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                margin:10px;
                font-size: 14px;
                transition: transform 0.2s;
            }
            
            .social-link:hover {
                transform: translateY(-2px);
            }
            
            .footer {
                background-color: #f9fafb;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
            }
            
            .footer-text {
                font-size: 14px;
                color: #6b7280;
                margin-bottom: 10px;
            }
            
            .unsubscribe {
                font-size: 12px;
                color: #9ca3af;
                text-decoration: none;
            }
            
            .unsubscribe:hover {
                color: #dc2626;
            }
            
            @media (max-width: 600px) {
                .container {
                    margin: 0 10px;
                }
                
                .header {
                    padding: 30px 20px;
                }
                
                .content {
                    padding: 30px 20px;
                }
                
                .queue-number {
                    font-size: 36px;
                }
                
                .greeting {
                    font-size: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">RASMLAI</div>
                <div class="tagline">Your emotions matter, Your voice matters</div>
            </div>
            
            <div class="content">
                <div class="greeting">Welcome to the journey, ${name}! 🌟</div>
                
                <div class="queue-card">
                    <div class="queue-number">#${queueNumber}</div>
                    <div class="queue-text">Your position in the waitlist</div>
                
                <div class="message">
                    <p>Thank you for joining the Rasmlai community! We're building something truly special - a safe space where you can express anger, sadness, and every emotion in between.</p>
                </div>
                
                <div class="message">
                    <p>Your AI companion is being carefully crafted to listen, understand, and help you process whatever you're feeling. We believe that <strong>self-reflection is the key</strong> to emotional wellness.</p>
                </div>
                
                <div class="features">
                    <h3>What to expect when Rasmlai launches:</h3>
                    <div class="feature-item">
                        <div class="feature-icon">🤖</div>
                        <div>AI companion trained specifically for emotional support</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🛡️</div>
                        <div>100% private and secure conversations</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">💭</div>
                        <div>Guided self-reflection exercises</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">📱</div>
                        <div>Beautiful, intuitive mobile experience</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🌱</div>
                        <div>Personalized emotional growth tracking</div>
                    </div>
                </div>
                
                <div class="cta-section">
                    <p style="font-size: 16px; color: #6b7280; margin-bottom: 15px;">
                        We'll keep you updated on our progress and notify you as soon as we're ready to launch!
                    </p>
                    
                    <div class="social-links">
                        <a href="https://www.rasmlai.life/" class="social-link">Follow Updates</a>
                        <a href="https://www.rasmlai.life/share" class="social-link">Share with Friends</a>
                    </div>
                </div>
                
                <div class="message" style="margin-top: 30px; font-style: italic; color: #9ca3af;">
                    <p>"Let your emotions flow freely" - this isn't just our tagline, it's our promise to you.</p>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-text">
                    <strong>Rasmlai Team</strong><br>
                    Building the future of emotional wellness
                </div>
                <div class="footer-text">
                    Questions? Just reply to this email - we'd love to hear from you!
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

export default WaitlistEmail;