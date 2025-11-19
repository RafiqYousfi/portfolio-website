const Contact = () => {
  return (
    <section className="">

      <h2 className="ContactName">Contact Me!</h2>
      <form action="#" method="post" className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Last Name</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button className="ButtonContact" type="submit">
          Submit
        </button>
      </form>

    </section>
  );
};

export default Contact;
