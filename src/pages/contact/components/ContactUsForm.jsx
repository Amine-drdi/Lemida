import React from "react";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col w-full md:w-1/2 py-8 mt-12">
      {/*<h2 className="text-2xl font-semibold mb-6 text-primary">Envoyez-nous un Message</h2>*/}
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom et Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            placeholder="Entrez votre Nom et Prénom"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            placeholder="Entrez votre Email"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Téléphone
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            placeholder="Entrer votre numéro de téléphone"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            placeholder="Votre Message"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="sm:w-fit w-full text-white font-medium sm:text-base text-sm px-6 py-2 rounded-full bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
