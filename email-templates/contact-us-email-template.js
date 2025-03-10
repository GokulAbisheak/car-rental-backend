// Contact Us HTML Email Template
const contactUsEmailTemplate = (firstName, lastName, email, contactNumber, message) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: #ffbf00;
                color: #ffffff;
                text-align: center;
                padding: 20px;
                font-size: 24px;
                font-weight: bold;
            }
            .content {
                padding: 20px;
                color: #333;
            }
            .info-box {
                background-color: #f4f4f4;
                padding: 15px;
                border-left: 5px solid #ffbf00;
                margin-top: 10px;
                border-radius: 5px;
            }
            .info-box p {
                margin: 5px 0;
            }
            .footer {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 15px;
                font-size: 14px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .footer a {
                color: #ffbf00;
                text-decoration: none;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <div class="header">
                🚗 Kontaktanfrage erhalten!
            </div>
            <div class="content">
                <p><strong>Hallo Admin,</strong></p>
                <p>Sie haben eine neue Kontaktanfrage von Ihrer Website erhalten.</p>

                <div class="info-box">
                    <p><strong>📌 Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>📧 E-Mail:</strong> <a href="mailto:${email}" style="color: #ffbf00;">${email}</a></p>
                    <p><strong>📞 Kontaktnummer:</strong> ${contactNumber}</p>
                </div>

                <div class="info-box">
                    <p><strong>📜 Nachricht:</strong></p>
                    <blockquote>${message}</blockquote>
                </div>

                <p>Stellen Sie sicher, dass Sie dem Benutzer umgehend antworten.</p>
            </div>

            <div class="footer">
                &copy; 2024 Dream Rent | <a href="https://dream-rent.ch">Besuchen Sie die Website</a>
            </div>
        </div>

    </body>
    </html>
    `;
};

module.exports = contactUsEmailTemplate;