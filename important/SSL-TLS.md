## The Handshake

1. Client says hello with support SSL/TLS versions and the list of algorithms(cipher suit)
2. Server says hello and selects the best SSL/TLS version and a algorithm and back the SSL certificate which has the public key
3. Client Key Exchange: Client checks whether the SSL certificate is legit with the authority and generates a pre-master key. Client then encrypt this pre-master key with server's public key and sends it back
4. Server uses the private key to decrypt the pre-master key
5. Client sends a test message and server responds with a test message
6. Now, both server and client compute a master key through a standard process

---

### **Corrected SSL/TLS Handshake Process**

1. **ClientHello**:

   - The client initiates the handshake by sending a **ClientHello** message, which includes:
     - The SSL/TLS versions it supports.
     - A list of **cipher suites** (algorithms for encryption, hashing, etc.) it supports.
     - A random value called the **ClientRandom**, used later in key derivation.

2. **ServerHello**:

   - The server responds with a **ServerHello** message, which includes:
     - The selected SSL/TLS version and cipher suite.
     - A random value called the **ServerRandom**, used later in key derivation.
     - The server's **SSL certificate**, which includes:
       - The server's public key.
       - Information about the server's identity.
       - The certificate authority (CA) signature.

3. **Client Certificate Validation**:

   - The client verifies the server's SSL certificate using:
     - The CA's public key (from the trusted root store).
     - The validity of the certificate (expiry date, domain match, etc.).
     - If the certificate is invalid, the handshake is terminated.

4. **Key Exchange (ClientKeyExchange)**:

   - **For RSA Key Exchange**:
     - The client generates a **pre-master secret** (a random value used in key derivation).
     - It encrypts the pre-master secret using the **server's public key** (from the certificate) and sends it to the server.
   - **For Ephemeral Diffie-Hellman (DHE/ECDHE)**:
     - The client and server exchange additional key material to compute a shared pre-master secret without directly transmitting it.

5. **Server Decrypts Pre-Master Secret**:

   - The server uses its **private key** to decrypt the pre-master secret (for RSA) or computes it directly (for DHE/ECDHE).

6. **Master Secret Computation**:

   - Both client and server use the **pre-master secret**, **ClientRandom**, and **ServerRandom** to derive the **master secret** using a pseudo-random function (PRF).
   - This master secret is then used to generate symmetric keys for encryption, MAC (message authentication code), and IVs (initialization vectors).

7. **Handshake Verification**:

   - The client and server exchange **Finished** messages:
     - Each side sends a "test" message encrypted with the derived keys to verify the encryption/decryption works.
     - If the messages match, the handshake is complete.

8. **Secure Communication Begins**:
   - All subsequent communication is encrypted using the symmetric keys derived from the master secret.

---

### **Corrections to Your Description**:

1. **Step 3 - Client Certificate Validation**:

   - You mentioned "checks whether the SSL certificate is legit with the authority."
     - The client doesn’t directly contact the CA; it uses the **CA public key in its root store** to verify the certificate.

2. **Step 5 - Test Messages**:

   - The "test message" concept you mentioned is part of the **Finished** message, which is a cryptographic verification, not a literal test message. It ensures both parties derived the same keys.

3. **Step 6 - Master Key Computation**:
   - The master key is derived before the Finished messages, not afterward.

---

### Enhanced SSL/TLS Handshake Diagram (RSA Key Exchange):

```
Client                               Server
  |                                    |
  | ---- ClientHello ----------------> |  (Step 1)
  |                                    |
  | <---- ServerHello ---------------- |  (Step 2)
  |       + Certificate (public key)   |
  |                                    |
  | -- [Validate Certificate] -------> |  (Step 3)
  |                                    |
  | -- ClientKeyExchange (encrypted) ->|  (Step 4)
  |                                    |
  | <--- [Decrypt Pre-Master Secret] --|  (Step 5)
  |                                    |
  | -- Finished (encrypted) ---------->|  (Step 7)
  | <--- Finished (encrypted) ---------|  (Step 7)
  |                                    |
  | === Secure Communication Begins ===|  (Step 8)
```

---

```
Client                                   Server
  |                                       |
  | -----> ClientHello (cipher suite,     |
  |         SSL/TLS version)              |
  |                                       |
  | <----- ServerHello (chosen cipher,    |
  |         SSL/TLS version)              |
  |         Certificate (public key)      |
  |                                       |
  | ---> [Verify certificate]             |
  |                                       |
  | --> Pre-Master Secret (encrypted with |
  |     server's public key)              |
  |                                       |
  |                                       |
  | <----- [Decrypt Pre-Master Secret     |  |         with private key]             |
  |                                       |
  | -> Compute Master Secret              |
  |                                       |
  | <--- Compute Master Secret            |
  |                                       |
  | -----> Finished (using symmetric keys)|
  | <----- Finished (using symmetric keys)|
  |                                       |
  |  [Encrypted communication begins]     |
  -----------------------------------------
```

Facts:
All the messages after the handshake is done are not encrypted with public and private key but they are encrypted and decrypted with the derived master key at each end.

The purpose of the SSL/TLS is to verify the identity and securely compute or derive a master key that's all

```
MasterSecret = PRF(PreMasterSecret, "master secret", ClientRandom + ServerRandom)

PRF is the Pseudo-Random Function.
"master secret" is a fixed string (label) used to avoid ambiguity in key derivation and it's not the secret itself
ClientRandom + ServerRandom is the concatenation of the random nonces.
The PRF expands the PreMasterSecret into a 48-byte Master Secret through multiple rounds of HMAC and mixing.



Inputs to Derive Master Secret:
---------------------------------------
Pre-Master Key
    +
ClientRandom (nonce)
    +
ServerRandom (nonce)
---------------------------------------
         |
         V
     PRF Function
         |
         V
   Derived Master Secret
---------------------------------------
         |
         V
  Used to generate session keys
---------------------------------------
```

### **CA (Certificate Authority):**

The core responsibilities of a CA are:

1. **Issuing Certificates**: Creating and signing certificates for entities like websites, organizations, or individuals.
2. **Confirming Identity**: Verifying the identity of certificate owners to ensure trustworthiness.
3. **Maintaining Certificate Validity**: Providing proof of validity via mechanisms like Certificate Revocation Lists (CRLs) or Online Certificate Status Protocol (OCSP).

---

#### **Root Store:**

- A **root store** is a collection of trusted **root certificates** from reputable CAs, like Let's Encrypt, Symantec (now DigiCert), GoDaddy, Comodo, and DigiCert.
- Major operating systems and browsers (like Apple, Windows, and Mozilla) maintain their own root stores. These root certificates are **pre-installed** on your devices.

---

#### **Certificate Flavors**:

1. **Domain Validated (DV)**:

   - Verifies ownership or control of a domain (via DNS records, file uploads, or email confirmation).
   - Least stringent but provides basic encryption and trust.
   - Green lock on the browser.

2. **Organization Validated (OV)**:

   - Requires additional **manual verification** of the organization's identity (business registration, etc.).
   - Provides more trust than DV.
   - Green lock on the browser.

3. **Extended Validation (EV)**:
   - **Exhaustive verification** of the organization's legal and operational status.
   - Displays the organization's name in the browser's address bar along with the green lock.
   - Intended for businesses requiring high trust (e.g., banks, e-commerce).

---

#### **Chain of Trust**:

Your description is accurate with a few clarifications:

1. **How It Works**:

   - A CA signs certificates using its private key.
   - The CA’s **root certificate** (pre-installed in root stores) verifies these signed certificates.

2. **Intermediate Certificates**:

   - Most CAs don't directly use root certificates to sign end-entity certificates (e.g., a website's cert).
   - Instead, they use **intermediate certificates** signed by the root. This forms a "chain of trust."
   - This makes revocation simpler—if an intermediate certificate is compromised, it can be revoked without affecting the root certificate.

3. **Browser Walkthrough**:
   - When a browser connects to a site over HTTPS:
     - It downloads the site's certificate.
     - The certificate contains a pointer (via the **Issuer field**) to the signing CA certificate (often an intermediate cert).
     - The browser downloads the intermediate cert (if not already cached) and continues up the chain until it reaches the root certificate in the trusted root store.
   - If all certificates in the chain are valid and trusted, the chain of trust is established.

---

---

#### **Self-Signed Certificates**:

- A **self-signed certificate** is signed by the same entity that issued it, meaning there’s no external CA involved.
- Without a trusted root to verify the chain, browsers will show a "certificate not trusted" or "chain can't be verified" error.

---

### ASCII Visualization of the Chain of Trust:

```
 Root Certificate (CA)  <-- Pre-installed in Root Store
        |
        v
 Intermediate Certificate (Signed by Root)
        |
        v
 End-Entity Certificate (Website)
```

---

### Enhanced Walkthrough:

1. Browser connects to the website and downloads the **end-entity certificate**.
2. It follows the **Issuer** field to fetch the **intermediate certificate** (if not cached).
3. The intermediate certificate points to the **root certificate**.
4. The browser validates the chain by checking each certificate's signature and ensuring the root certificate is trusted (in the root store).

If validation succeeds, the chain of trust is complete. If not (e.g., self-signed certificates), the connection is flagged as untrusted.
