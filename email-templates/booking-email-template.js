const bookingEmailTemplate = (firstName, lastName, email, phone, country, street, city, postcode, carName, bookingDate, returnDate, duration, subtotal, total) => {
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
            .highlight {
                font-size: 18px;
                font-weight: bold;
                color: #ffbf00;
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
                🚗 Details zur Fahrzeugbuchung
            </div>
            <div class="content">

                <h3 class="highlight">📌 Details des Buchungsbenutzers</h3>
                <div class="info-box">
                    <p><strong>👤 Vorname:</strong> ${firstName} </p>
                    <p><strong>👤 Nachname:</strong> ${lastName}</p>
                    <p><strong>🏠 Straße/ Nr.:</strong> ${street} </p>
                    <p><strong>⭕ Postleitzahl:</strong> ${postcode}</p>
                    <p><strong>🛣️ Ort:</strong> ${city} </p>
                    <p><strong>🌍 Land / Region:</strong> ${country}</p>
                    <p><strong>📞 Telefon:</strong> ${phone}</p>
                    <p><strong>📧 E-Mail:</strong> <a href="mailto:${email}" style="color: #ffbf00;">${email}</a></p>
                </div>

                <h3 class="highlight">🚘 Buchungsdetails</h3>
                <div class="info-box">
                    <p><strong>Auto:</strong> ${carName}</p>
                    <p><strong>📅 Aus:</strong> ${bookingDate}</p>
                    <p><strong>📅 Zu:</strong> ${returnDate}</p>
                    <p><strong>⏳ Dauer:</strong> ${duration}</p>
                    <p><strong>💰 Zwischensumme:</strong> CHF ${subtotal}</p>
                    <p><strong>💳 Gesamt:</strong> CHF ${total}</p>
                </div>
            </div>

            <div class="footer">
                &copy; 2024 Dream Rent | <a href="https://dream-rent.ch">Besuchen Sie die Website</a>
            </div>
        </div>

    </body>
    </html>
    `
}

module.exports = bookingEmailTemplate;