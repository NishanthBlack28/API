const concertData = `{
  "certificates": [
    {
      "id": "1",
      "name": "Basics of HTML/CSS",
      "issuing_organization": "Open Weaver",
      "issued_date": "JAN 2023",
      "credential_id": "09645513774309",
      "credential_link": "https://kandi.verified.cv/en/verify/09645513774309"
    },
    {
      "id": "2",
      "name": "Basics of JavaScript",
      "issuing_organization": "Open Weaver",
      "issued_date": "FEB 2023",
      "credential_id": "23894786788624",
      "credential_link": "https://kandi.verified.cv/en/verify/23894786788624"
    },
    {
      "id": "3",
      "name": "Basics of Python",
      "issuing_organization": "Open Weaver",
      "issued_date": "MAR 2023",
      "credential_id": "09367659355792",
      "credential_link": "https://kandi.verified.cv/en/verify/09367659355792"
    },
    {
      "id": "4",
      "name": "Intro to ML,DL and Computer Vision",
      "issuing_organization": "Analytics Club, CFI, IIT Madras",
      "issued_date": "AUG 2023",
      "credential_id": "",
      "credential_link": "https://drive.google.com/file/d/1MSLw26jVHqwzDJzZBPM96Q2cIHxhb__w/view?usp=drivesdk"
    },
    {
      "id": "5",
      "name": "Python",
      "issuing_organization": "Guvi Geek Networks",
      "issued_date": "OCT 2023",
      "credential_id": "P787o0u61990CbmV08",
      "credential_link": "https://www.guvi.in/verify-certificate?id=P787o0u61990CbmV08"
    }
  ]
}`;

const concertObject = JSON.parse(concertData);

// Iterate over each certificate
concertObject.certificates.forEach(certificate => {
  console.log(`Certificate ID: ${certificate.id}`);
  console.log(`Name: ${certificate.name}`);
  console.log(`Issuing Organization: ${certificate.issuing_organization}`);
  console.log(`Issued Date: ${certificate.issued_date}`);
  console.log(`Credential ID: ${certificate.credential_id}`);
  console.log(`Credential Link: ${certificate.credential_link}`);
  console.log('\n'); // Separate each certificate for clarity
});
