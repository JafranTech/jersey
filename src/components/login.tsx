import { useEffect, useState } from "react";

interface OAuthModalProps {
    onClose: () => void;
    onSwitchToSignup: () => void;
}

export function LoginContent({ onClose, onSwitchToSignup }: OAuthModalProps) {
    // State to toggle between Login (true) and Register (false) is now handled by parent mostly, 
    // but this component effectively IS the Login state content.
    // We keep useState here if needed for internal logic, but effectively we are always in "Login" mode visually here
    // unless we pressed "Create Account" which calls onSwitchToSignup.

    return (
        // Removed the outer fixed/absolute wrappers to prevent re-triggering animation
        // Kept the inner content wrapper
        <div className="w-full h-full bg-white relative md:w-[1000px] shadow-2xl h-full font-sans">

            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    zIndex: 1000,
                    background: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* CSS STYLES (Embedded) */}
            <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
            }

            /* Animations not needed for slide-in here anymore, handled by parent */
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .fade-in {
              animation: fadeIn 0.4s ease-in-out;
            }

            /* Layout */
            .container {
              display: flex;
              height: 100%;
              width: 100%;
            }

            /* Left Side Image */
            .image-section {
              flex: 1;
              background-size: cover;
              background-position: center;
              position: relative;
              display: flex;
              align-items: flex-end;
              padding: 60px;
              transition: background-image 0.5s ease-in-out;
            }

            .image-section::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8));
            }

            .content-overlay {
              position: relative;
              color: white;
              z-index: 2;
            }

            .content-overlay h1 {
              font-size: 3.5rem;
              font-weight: 700;
              line-height: 1;
              margin-bottom: 15px;
              text-transform: uppercase;
              letter-spacing: -1px;
            }

            .content-overlay p {
              font-size: 1.125rem;
              font-weight: 300;
              opacity: 0.9;
              max-width: 400px;
            }

            /* Right Side Form */
            .form-section {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 40px;
              overflow-y: auto;
              background-color: #ffffff;
            }

            .form-wrapper {
              width: 100%;
              max-width: 420px;
              text-align: center;
            }

            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            
            .header h2 {
              font-size: 2rem;
              font-weight: 600;
              color: #1a1a1a;
              margin-bottom: 8px;
            }
            
            .header p {
              color: #666;
              font-size: 0.95rem;
            }

            /* Inputs */
            .input-group {
              margin-bottom: 15px;
              text-align: left;
            }

            .input-group label {
              display: block;
              font-size: 0.85rem;
              margin-bottom: 5px;
              font-weight: 500;
              color: #333;
            }

            .input-group input {
              width: 100%;
              padding: 12px 16px;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              background: #fafafa;
              font-size: 1rem;
              outline: none;
              transition: all 0.2s;
            }
            
            .input-group input:focus {
              border-color: #333;
              background: #fff;
            }

            /* Buttons */
            .submit-btn {
              width: 100%;
              padding: 14px;
              background: #1a1a1a;
              color: white;
              border: none;
              border-radius: 50px;
              cursor: pointer;
              margin-bottom: 20px;
              font-weight: 500;
              font-size: 1rem;
              transition: background 0.3s;
            }
            
            .submit-btn:hover {
              background: #333;
            }

            .google-btn {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 12px;
              border: 1px solid #e0e0e0;
              border-radius: 50px;
              padding: 14px 24px;
              cursor: pointer;
              background: white;
              font-weight: 500;
              color: #333;
              transition: all 0.3s;
              margin-bottom: 30px;
            }
            
            .google-btn:hover {
              background: #f9f9f9;
              border-color: #ccc;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            }

            .separator {
              margin: 30px 0;
              position: relative;
              border-top: 1px solid #eee;
            }

            .separator span {
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              background: white;
              padding: 0 15px;
              font-size: 0.85rem;
              color: #aaa;
            }

            .footer-note {
              margin-top: 20px;
              font-size: 0.9rem;
              color: #aaa;
            }
            
            .footer-note button {
              color: #1a1a1a;
              background: none;
              border: none;
              font-weight: 600;
              cursor: pointer;
              text-decoration: none;
              font-size: 0.9rem;
              padding: 0;
              margin-left: 5px;
            }
            
            .footer-note button:hover {
              text-decoration: underline;
            }

            /* Checkbox */
            .checkbox-group {
              display: flex;
              gap: 10px;
              margin-bottom: 25px;
              font-size: 0.85rem;
              align-items: flex-start;
              text-align: left;
              color: #666;
            }
            
            .checkbox-group input {
              margin-top: 3px;
              cursor: pointer;
            }

            .legal-text {
              font-size: 0.75rem;
              color: #bbb;
              line-height: 1.6;
              margin-top: 40px;
            }

            .legal-text a {
              color: #555;
              text-decoration: none;
              border-bottom: 1px solid #e0e0e0;
            }

            @media (max-width: 850px) {
              .container { flex-direction: column; }
              .image-section { display: none; }
              .form-section { padding: 20px; }
            }
          `}</style>

            {/* MAIN CONTENT (JSX) */}
            <div className="container">

                {/* LEFT SIDE: Login Image */}
                <div
                    className="image-section"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2831&auto=format&fit=crop')"
                    }}
                >
                    <div className="content-overlay">
                        <h1>MJ Jersey</h1>
                        <p>Wear the Passion. Feel the Game. Authentic kits for true fans.</p>
                    </div>
                </div>

                {/* RIGHT SIDE: Login Form */}
                <div className="form-section">

                    <div className="form-wrapper fade-in">
                        <div className="header">
                            <h2>Welcome Back</h2>
                            <p>Log in to access your saved jerseys</p>
                        </div>

                        <button className="google-btn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="22" height="22" />
                            <span>Continue with Google</span>
                        </button>

                        <div className="separator"><span>or</span></div>

                        <div className="input-group">
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <button className="submit-btn">Sign In</button>

                        <div className="footer-note">
                            New to MJ Jersey?
                            <button onClick={onSwitchToSignup}>Create an account</button>
                        </div>

                        <div className="legal-text">
                            By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}