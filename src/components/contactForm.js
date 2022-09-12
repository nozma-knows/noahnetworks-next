import emailjs from "@emailjs/browser";
import TextField from "../ui/fields/textField";
import Button from "../ui/buttons/button";

// Credentials for EmailJS
const emailJSAccessToken = process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN;
const emailJSServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJSTempleId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const submitFunction = (data, setValue) => {
  Object.keys(data).map((keys) => setValue(`${keys}`, ""));
  const templateParams = { ...data };
  emailjs
    .send(emailJSServiceId, emailJSTempleId, templateParams, emailJSAccessToken)
    .then(() => console.log("Success!: "))
    .catch((error) => console.log("Error: ", error));
};

export default function ContactForm({
  control,
  errors,
  handleSubmit,
  setValue,
}) {
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit((data) => submitFunction(data, setValue))}>
        <TextField
          name="firstName"
          control={control}
          placeholder="First name"
          errors={errors}
          required="First name is required."
        />
        <TextField
          name="lastName"
          control={control}
          placeholder="Last name"
          errors={errors}
          required="Last name is required."
        />
        <TextField
          name="email"
          control={control}
          placeholder="Email address"
          errors={errors}
          required="Email address is required."
          pattern={{
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: "Please enter a valid email address",
          }}
        />
        <TextField
          name="message"
          control={control}
          placeholder="Message"
          errors={errors}
          required="Message is required."
          minRows={4}
          maxRows={4}
        />
        <div className="flex justify-center">
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
}
