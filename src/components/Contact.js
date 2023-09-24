const Contact = () => {
  return (
    <div className="flex flex-col items-center contact-us">
      <h1 className="font-bold text-3xl p-4 m-4">Send us your message</h1>
      <form className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-10 m-10 shadow-xl">
        <div>
          <input
            className="border border-black p-2 m-2 rounded font-bold"
            type="text"
            placeholder="Name"
          ></input>
        </div>
        <div>
          <input
            className="border border-black p-2 m-2 rounded font-bold"
            type="text"
            placeholder="Message"
          ></input>
        </div>
        <button className="border border-black rounded px-4 py-1 m-2 font-bold bg-green-100 hover:bg-green-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
