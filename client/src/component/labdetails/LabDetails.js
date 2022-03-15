import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Button } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const arr = [
  {
    title: 'Sql title',
    Description: `SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It generally allows an attacker to view data that they are not normally able to retrieve. This might include data belonging to other users, or any other data that the application itself is able to access. In many cases, an attacker can modify or delete this data, causing persistent changes to the application's content or behavior.
    In some situations, an attacker can escalate an SQL injection attack to compromise the underlying server or other back-end infrastructure, or perform a denial-of-service attack.
    `,
    Prevention: `There are number of methods for reducing the risk of a data breach due to SQL injection. As a best practice, several strategies should be utilized. Let’s explore a few of the more common implementations:

    Use of Prepared Statements (with Parameterized Queries) - This method of sanitizing database inputs involves forcing the developers to first define all the SQL code, and then to pass only specific parameters to the SQL query; data entered is explicitly given a limited scope that it can not expand beyond. This allows the database to make the distinction between data that’s being input and code that’s to be run, regardless of the type of data supplied in the input field. Some object-relational mapping (ORM) libraries are commonly utilized for this purpose, as some versions will sanitize database inputs automatically.
        
    Escape All User Supplied Input - When writing SQL, specific characters or words have particular meaning. For example, the ‘*’ character means “any” and the words “OR” is a conditional. To circumvent users who enter these characters either accidentally or maliciously into an API request to the database, user supplied input can be escaped. Escaping a character is the way of telling the database not to parse it as a command or conditional but instead treat it as literal input.
    
    `,
    htd: `Consider an application that lets users log in with a username and password. If a user submits the username wiener and the password bluecheese, the application checks the credentials by performing the following SQL query:
    SELECT * FROM users WHERE username = 'wiener' AND password = 'bluecheese'
    
    If the query returns the details of a user, then the login is successful. Otherwise, it is rejected.
    
    Here, an attacker can log in as any user without a password simply by using the SQL comment sequence -- to remove the password check from the WHERE clause of the query. For example, submitting the username administrator'-- and a blank password results in the following query:
    SELECT * FROM users WHERE username = 'administrator'--' AND password = ''
    
    This query returns the user whose username is administrator and successfully logs the attacker in as that user. 
    `,
    lab_link: '',
  },
  ,
  {
    title: 'Sql title',
    Description:
      'OS command injection (also known as shell injection) is a web security vulnerability that allows an attacker to execute arbitrary operating system (OS) commands on the server that is running an application, and typically fully compromise the application and all its data. Very often, an attacker can leverage an OS command injection vulnerability to compromise other parts of the hosting infrastructure, exploiting trust relationships to pivot the attack to other systems within the organization.',
    Prevention: `By far the most effective way to prevent OS command injection vulnerabilities is to never call out to OS commands from application-layer code. In virtually every case, there are alternate ways of implementing the required functionality using safer platform APIs.

    If it is considered unavoidable to call out to OS commands with user-supplied input, then strong input validation must be performed. Some examples of effective validation include:
    
        Validating against a whitelist of permitted values.
        Validating that the input is a number.
        Validating that the input contains only alphanumeric characters, no other syntax or whitespace.
    
    Never attempt to sanitize input by escaping shell metacharacters. In practice, this is just too error-prone and vulnerable to being bypassed by a skilled attacker.
    `,
    htd: `The following PHP code snippet is vulnerable to a command injection attack :
    It accepts a filename as a command line argument, and displays the contents of the file back to the user.
    
    <?php print(“Please specify the name of the file to delete”); print(“<p>”); $file=$_GET["filename"]; system(“rm $file”); ?>
    
    The following request and response is an example of a successful attack:
    
    Request http://127.0.0.1/delete.php?filename=bob.txt;id
    
    Response
    
    Please specify the name of the file to delete
    
    uid=33(www-data) gid=33(www-data) groups=33(www-data)
    
    `,
    lab_link: '',
  },

  {
    title: 'XML external entity (XXE) injection',
    Description: `XML external entity injection (also known as XXE) is a web security vulnerability that allows an attacker to interfere with an application's processing of XML data. It often allows an attacker to view files on the application server filesystem, and to interact with any back-end or external systems that the application itself can access.

    In some situations, an attacker can escalate an XXE attack to compromise the underlying server or other back-end infrastructure, by leveraging the XXE vulnerability to perform server-side request forgery (SSRF) attacks.`,
    Prevention: `Virtually all XXE vulnerabilities arise because the application's XML parsing library supports potentially dangerous XML features that the application does not need or intend to use. The easiest and most effective way to prevent XXE attacks is to disable those features.

    Generally, it is sufficient to disable resolution of external entities and disable support for XInclude. This can usually be done via configuration options or by programmatically overriding default behavior. Consult the documentation for your XML parsing library or API for details about how to disable unnecessary capabilities. 
    `,
    htd: `Numerous public XXE issues have been discovered, including attacking embedded devices. XXE occurs in a lot of unexpected places, including deeply nested dependencies. The easiest way is to upload a malicious XML file, if accepted:
    Example #1: The attacker attempts to extract data from the server
    
              <?xml version="1.0" encoding="ISO-8859-1"?> <!DOCTYPE foo [
              <!ELEMENT foo ANY >
              <!ENTITY xxe SYSTEM "file:///etc/passwd" >]> <foo>&xxe;</foo>
          
    
    Example #2: An attacker probes the server's private network by changing the above ENTITY line to
    
              <!ENTITY xxe SYSTEM "https://192.168.1.1/private" >]>
          
    
    Example #3: An attacker attempts a denial-of-service attack by including a potentially endless file
    
              <!ENTITY xxe SYSTEM "file:///dev/random" >]>
    
    `,
    lab_link: '',
  },

  {
    title: 'Cross site scripting',
    Description: `Cross-Site Scripting (XSS) attacks occur when:

    Data enters a Web application through an untrusted source, most frequently a web request.
    The data is included in dynamic content that is sent to a web user without being validated for malicious content.

The malicious content sent to the web browser often takes the form of a segment of JavaScript, but may also include HTML, Flash, or any other type of code that the browser may execute. The variety of attacks based on XSS is almost limitless, but they commonly include transmitting private data, like cookies or other session information, to the attacker, redirecting the victim to web content controlled by the attacker, or performing other malicious operations on the users machine under the guise of the vulnerable site.`,
    Prevention: `Preventing cross-site scripting is trivial in some cases but can be much harder depending on the complexity of the application and the ways it handles user-controllable data.

    In general, effectively preventing XSS vulnerabilities is likely to involve a combination of the following measures:
    
        Filter input on arrival: At the point where user input is received, filter as strictly as possible based on what is expected or valid input.
        Encode data on output: At the point where user-controllable data is output in HTTP responses, encode the output to prevent it from being interpreted as active content. Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding.
        Use appropriate response headers: To prevent XSS in HTTP responses that aren't intended to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers to ensure that browsers interpret the responses in the way you intend.
        Content Security Policy: As a last line of defense, you can use Content Security Policy (CSP) to reduce the severity of any XSS vulnerabilities that still occur. 
    `,
    htd: ` It arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way.

    Here is a simple example of a reflected XSS vulnerability:
    https://insecure-website.com/status?message=All+is+well.
    <p>Status: All is well.</p>
    
    The application doesn't perform any other processing of the data, so an attacker can easily construct an attack like this:
    https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/</script>
    <p>Status: <script>/* Bad stuff here... */</script></p>
    
    If the user visits the URL constructed by the attacker, then the attacker's script executes in the user's browser, in the context of that user's session with the application. At that point, the script can carry out any action, and retrieve any data, to which the user has access.     
    
    `,
    lab_link: '',
  },

  {
    title: ' Insecure deserialization',
    Description: `Insecure deserialization is when user-controllable data is deserialized by a website. This potentially enables an attacker to manipulate serialized objects in order to pass harmful data into the application code.

    It is even possible to replace a serialized object with an object of an entirely different class. Alarmingly, objects of any class that is available to the website will be deserialized and instantiated, regardless of which class was expected. For this reason, insecure deserialization is sometimes known as an "object injection" vulnerability.
    
    An object of an unexpected class might cause an exception. By this time, however, the damage may already be done. Many deserialization-based attacks are completed before deserialization is finished. This means that the deserialization process itself can initiate an attack, even if the website's own functionality does not directly interact with the malicious object. For this reason, websites whose logic is based on strongly typed languages can also be vulnerable to these techniques. `,
    Prevention: `The only safe architectural pattern is not to accept serialized objects from untrusted sources or to use serialization mediums that only permit primitive data types. If that is not possible, consider one of more of the following:

    Implementing integrity checks such as digital signatures on any serialized objects to prevent hostile object creation or data tampering.
    Enforcing strict type constraints during deserialization before object creation as the code typically expects a definable set of classes. Bypasses to this technique have been demonstrated, so reliance solely on this is not advisable.
        Content Security Policy: As a last line of defense, you can use Content Security Policy (CSP) to reduce the severity of any XSS vulnerabilities that still occur. 
    `,
    htd: ` A PHP forum uses PHP object serialization to save a "super" cookie, containing the user's user ID, role, password hash, and other state:

    a:4:{i:0;i:132;i:1;s:7:"Mallory";i:2;s:4:"user"; i:3;s:32:"b6a8b3bea87fe0e05022f8f3c88bc960";}


An attacker changes the serialized object to give themselves admin privileges:

    a:4:{i:0;i:1;i:1;s:5:"Alice";i:2;s:5:"admin"; i:3;s:32:"b6a8b3bea87fe0e05022f8f3c88bc960";}
    `,
    lab_link: '',
  },
];

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

function LabDetails({ index = 0 }) {
  const onSubmit = (e, link) => {
    e.preventDefaults();
    axios.get(link, config);
  };
  return (
    <Typography>
      <Title>{arr[index].title}</Title>
      <Title level={2}>Description</Title>
      <Paragraph>{arr[index].Description}</Paragraph>
      <Title level={2}>Proof of Concept</Title>
      <Paragraph>{arr[index].Poc}</Paragraph>

      <Title level={2}>How to Detect</Title>
      <Paragraph>{arr[index].htd}</Paragraph>

      <Title level={2}>Lab Link</Title>
      <Button type='primary' onClick={(e) => onSubmit(e, arr[index].lab_link)}>
        Go To Lab
      </Button>
    </Typography>
  );
}

export default LabDetails;
