function checkNumber() {
    let phone = document.getElementById("phone").value;
    let result = document.getElementById("result");

    phone = phone.replace(/\s/g, "");

    if (/^(?:\+91)?\d{10}$/.test(phone)) {
        let number = phone.replace("+91", "");
        let first = number[0];

        let region = "";
        if (first === "9" || first === "8") {
            region = "North / Metro area (approx)";
        } else if (first === "7") {
            region = "South / Central (approx)";
        } else if (first === "6") {
            region = "Mixed / Updated series";
        } else {
            region = "Unknown";
        }

        // Basic operator detection based on first 4-5 digits (sample)
        const operatorPrefixes = {
            "9876": "Airtel",
            "9880": "Vodafone Idea",
            "9810": "Jio",
            "9700": "BSNL",
            // Add more known series if needed
        };

        let operator = "Unknown";
        for (let prefix in operatorPrefixes) {
            if (number.startsWith(prefix)) {
                operator = operatorPrefixes[prefix];
                break;
            }
        }

        result.innerHTML = `
            <p style="color:green">✔ Valid Indian Number</p>
            <p>Country: India</p>
            <p>Region: ${region}</p>
            <p>Operator (approx): ${operator}</p>
            <p style="color:red">Note: Exact owner & address not accessible</p>
        `;

    } else {
        result.innerHTML = `<p style="color:red">❌ Invalid Number Format</p>`;
    }
}