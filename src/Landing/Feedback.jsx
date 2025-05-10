import FeedbackProps from "./FeedbackProps";

export default function Feedback() {
  return (
    <main>
      <div className="headings">Our Feedback</div>
      <section className="flex justify-center  w-[100%] items-center py-10">
        <section className="flex md:flex-row flex-col md:space-x-10 md:items-center h-[80%] space-y-10 md:space-y-0">
          <FeedbackProps
            image="/Bright.jpg"
            Name="Mr Bright"
            text="Your investment plan is good and reliable"
          />
          <FeedbackProps
            image="/Kelechi.jpg"
            Name="Mr Kelechi"
            text="Now I can seamlessly book my ride without stress"
          />
          <FeedbackProps
            image="/Blessing.jpg"
            Name="Mrs Blessing"
            text="This logistics company has completely transformed how we handle deliveries. Reliable, on-time and cost-effective"
          />
        </section>
      </section>
        
    </main>
  );
}
