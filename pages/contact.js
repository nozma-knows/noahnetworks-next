import Header from "../src/components/header";
import PageTitle from "../src/components/pageTitle";
import { useForm } from "react-hook-form";
import ContactForm from "../src/components/contactForm";

export default function Contact() {
  // React Hook Form variables
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#000000] to-[#18251C] font-urbanist">
      <Header page="contact" />
      <div className="flex-1 flex flex-col items-center p-8 gap-8">
        <PageTitle title="Contact Me" />
        <div className="flex w-11/12 max-w-xl">
          <ContactForm
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  );
}
