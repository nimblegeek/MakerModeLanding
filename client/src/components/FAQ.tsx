import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is ?
            </AccordionTrigger>
            <AccordionContent>
              Project timelines vary based on complexity, but we typically deliver MVPs within 2-4 weeks. 
              Full-scale projects usually take 1-3 months. We'll provide a detailed timeline during our 
              initial consultation based on your specific requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What technologies do you work with?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, 
              and various cloud platforms (AWS, Google Cloud, Azure). We're also experienced with mobile 
              development using React Native and native technologies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do you handle project pricing?
            </AccordionTrigger>
            <AccordionContent>
              We offer transparent, value-based pricing with clear milestones. After understanding your 
              requirements, we provide a detailed proposal with fixed pricing. We also offer flexible 
              payment terms to accommodate different budget needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you provide ongoing support after project completion?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer various maintenance and support packages to ensure your project continues 
              to run smoothly after launch. This includes bug fixes, security updates, and feature 
              enhancements as needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can you help with an existing project?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We have extensive experience in taking over existing projects, performing code 
              audits, and implementing improvements. We'll carefully review your current codebase and 
              propose the best path forward.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is your development process like?
            </AccordionTrigger>
            <AccordionContent>
              We follow an agile methodology with weekly sprints and regular client check-ins. Our 
              process includes thorough planning, continuous integration/deployment, rigorous testing, 
              and comprehensive documentation to ensure high-quality deliverables.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Do you sign NDAs and protect intellectual property?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we take intellectual property very seriously. We sign NDAs before detailed project 
              discussions and ensure all code and assets developed during the project belong exclusively 
              to our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
