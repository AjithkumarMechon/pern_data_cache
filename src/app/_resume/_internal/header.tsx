import React from "react";

function ResumeHeader() {
  return (
    <>
      <div className="flex flex-cols place-content-around  gap-4 mt-8">
        <header>
          <h1>A AJITHKUMAR</h1>
          <p>React JS Developer</p>
        </header>

        <address>
          <p>
            <a href="tel:+917708192049">+91 7708192049</a>
          </p>
          <p>
            <a href="mailto:ajithkumaranandandev@gmail.com">
              ajithkumaranandandev@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/ajithkumar-anandan-developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: ajithkumar-anandan-developer
            </a>
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=Gummidipoondi, Chennai, Tamil Nadu, India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gummidipoondi, Chennai, Tamil Nadu, India
            </a>
          </p>
        </address>
      </div>
    </>
  );
}

export default ResumeHeader;
