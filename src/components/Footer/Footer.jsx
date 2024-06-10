const Footer = () => {
     return (
          <div>
               <footer className="footer p-10 bg-base-200 text-base-content">
                    <div>
                         <h1 className="text-3xl font-extrabold text-red-500">CareerHub</h1>
                         <p>
                              There are many variations of passages <br />of Lorem Ipsum , but the majority <br />have suffered alteration in some form.
                         </p>
                    </div>
                    <nav>
                         <h6 className="footer-title">Services</h6>
                         <a className="link link-hover">Branding</a>
                         <a className="link link-hover">Design</a>
                         <a className="link link-hover">Marketing</a>
                         <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                         <h6 className="footer-title">Company</h6>
                         <a className="link link-hover">About us</a>
                         <a className="link link-hover">Contact</a>
                         <a className="link link-hover">Jobs</a>
                         <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                         <h6 className="footer-title">Legal</h6>
                         <a className="link link-hover">Terms of use</a>
                         <a className="link link-hover">Privacy policy</a>
                         <a className="link link-hover">Cookie policy</a>
                    </nav>
               </footer>
          </div>
     );
};

export default Footer;