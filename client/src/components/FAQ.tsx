import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-6xl font-bold mb-4">
              Commonly Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why wouldn't I hire a full-time developer?
              </AccordionTrigger>
              <AccordionContent>
                To start with, the average yearly cost of a full-time senior
                full-stack developer now exceeds €140,000 plus benefits (and
                good luck finding one available). Aside from that, you may not
                always have enough work to keep them busy at all times, so
                you're stuck paying for time you aren't able to utilize. With
                the monthly plan, you can pause and resume your subscription as
                often as you need to ensure you're only paying your developer
                when you have work available for them.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I cancel or get a refund?</AccordionTrigger>
              <AccordionContent>
                Yes. You will never pay for something you are not happy with.
                Once enrolled you can cancel or pause anytime. According to your
                needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Who are the developers?</AccordionTrigger>
              <AccordionContent>
                MakerMode is an agency of one. This means you work directly with
                me. This might mean that I will have a lot to do from time to
                time leading to longer response times. But no requests will take
                more than 48 hours to get feedback on. But it also mean no long
                email threads with consultant brokers, no boring meetings with
                procurement departments or long administrative processes and
                manager meetings. Just direct dialogue with me, Jonas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What tools and stacks do you use?
              </AccordionTrigger>
              <AccordionContent>
                I use a variety of tools depending on the complexity and I try
                to keep it simple. I have a go-to stack for most projects, but I
                am also happy to use whatever tools and frameworks needed for
                each project. Most projects are built using Rails thanks to its
                full-stack capability. It's also my go-to stack since it
                shortens the dev cycles and there are less trivial decisions to
                make. Convention over configuration. This saves time and money.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there any projects you don't do?
              </AccordionTrigger>
              <AccordionContent>
                I don't do AI apps, 3D modelling, game- or animation projects
                for example. Also, I claim the right to say no to any requests
                that may violate my foundational values.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                What if I only have a single request?
              </AccordionTrigger>
              <AccordionContent>
                No problem. You can pause your subscription when finished and
                return when you have additional requests and needs. There's no
                need to let the remainder of your subscription go to waste.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to launch that project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a call to discover your needs and see how we can help you ship
            something amazing.
          </p>
          <a
            href="https://cal.com/makermode/15min"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
