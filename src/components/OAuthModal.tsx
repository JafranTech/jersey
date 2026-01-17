import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { LoginContent } from "./login";

interface OAuthModalProps {
  onClose: () => void;
}

export function OAuthModal({ onClose }: OAuthModalProps) {
  const [showLogin, setShowLogin] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in container */}
      <div className="absolute inset-0 flex justify-end animate-slide-in">
        <div className="w-full h-full bg-white relative">
          {/* Main Content Area - Switches between Login and Register */}
          {showLogin ? (
            <LoginContent
              onClose={onClose}
              onSwitchToSignup={() => setShowLogin(false)}
            />
          ) : (
            <div className="w-full h-full bg-white relative md:w-[1000px] shadow-2xl h-full font-sans">
              {/* Register View (kept inline) */}

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

              {/* CSS */}
              <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

                        * {
                          margin: 0;
                          padding: 0;
                          box-sizing: border-box;
                          font-family: 'Poppins', sans-serif;
                        }
                        
                         /* Animations */
                        @keyframes slideIn {
                          from { transform: translateX(100%); }
                          to { transform: translateX(0); }
                        }
                        .animate-slide-in {
                          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }

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

                        .image-section {
                          flex: 1;
                          background-image: url('/images/hero1.png');
                          background-size: cover;
                          background-position: center;
                          position: relative;
                          display: flex;
                          align-items: flex-end;
                          padding: 60px;
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
                          margin-bottom: 15px;
                        }
                        
                        .content-overlay p {
                          font-size: 1.125rem;
                          font-weight: 300;
                          opacity: 0.9;
                        }

                        .form-section {
                          flex: 1;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          padding: 40px;
                          overflow-y: auto;
                        }

                        .form-wrapper {
                          width: 100%;
                          max-width: 450px;
                        }

                        .header {
                          text-align: center;
                          margin-bottom: 30px;
                        }
                        
                        .header h2 {
                          font-size: 2rem;
                          font-weight: 700;
                          color: #1a1a1a;
                          margin-bottom: 8px;
                        }
                        
                        .header p {
                          color: #666;
                        }

                        .input-group {
                          margin-bottom: 20px;
                        }

                        .input-group label {
                          display: block;
                          font-size: 0.85rem;
                          margin-bottom: 8px;
                          font-weight: 600;
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
                        }
                        
                        .input-group input:focus {
                          border-color: #333;
                          background: #fff;
                        }

                        .checkbox-group {
                          display: flex;
                          gap: 10px;
                          margin-bottom: 25px;
                          font-size: 0.85rem;
                          align-items: start;
                          color: #666;
                        }
                        
                        .checkbox-group input {
                          margin-top: 3px;
                        }
                        
                        .checkbox-group a {
                           color: #333;
                           text-decoration: underline;
                           font-weight: 500;
                        }

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

                        .divider {
                          text-align: center;
                          margin-bottom: 20px;
                          position: relative;
                        }

                        .divider::before {
                          content: '';
                          position: absolute;
                          top: 50%;
                          left: 0;
                          width: 100%;
                          height: 1px;
                          background: #eee;
                        }

                        .divider span {
                          background: white;
                          padding: 0 10px;
                          position: relative;
                          font-size: 0.85rem;
                          color: #999;
                        }

                        .google-btn {
                          width: 100%;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          gap: 10px;
                          border: 1px solid #e0e0e0;
                          border-radius: 50px;
                          padding: 12px;
                          cursor: pointer;
                          background: white;
                          font-weight: 500;
                          color: #333;
                          transition: background 0.3s;
                        }
                        
                        .google-btn:hover {
                          background: #f9f9f9;
                        }
                        
                        .footer-link {
                          text-align: center;
                          margin-top: 30px;
                          font-size: 0.9rem;
                          color: #666;
                        }
                        
                        .footer-link a {
                          color: #1a1a1a;
                          text-decoration: none;
                          font-weight: 600;
                          cursor: pointer;
                        }
                        
                        .footer-link a:hover {
                           text-decoration: underline;
                        }

                        @media (max-width: 850px) {
                          .container {
                            flex-direction: column;
                          }
                          .image-section {
                            display: none;
                          }
                        }
                      `}</style>

              <div className="container">
                <div className="image-section">
                  <div className="content-overlay">
                    <h1>Join the Club</h1>
                    <p>Create an account to track orders and get exclusive jersey drops.</p>
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-wrapper fade-in">
                    <div className="header">
                      <h2>Create Account</h2>
                      <p>It's free and takes 1 minute.</p>
                    </div>

                    <form>
                      <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" />
                      </div>

                      <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" />
                      </div>

                      <div className="input-group">
                        <label>Password</label>
                        <input type="password" />
                      </div>

                      <div className="checkbox-group">
                        <input type="checkbox" />
                        <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span>
                      </div>

                      <button type="button" class="submit-btn" >Create Account</button>
                    </form>

                    <div className="divider"><span>or sign up with</span></div>

                    <button class="google-btn">
                      <img width="20" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
                      Sign up with Google
                    </button>

                    <div className="footer-link">
                      Already have an account? <a onClick={() => setShowLogin(true)}>Log In</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
