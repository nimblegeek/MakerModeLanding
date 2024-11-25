import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cal-inline-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Booking() {
  return (
    <section id="booking" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Schedule a Consultation
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Book a call with our experts to discuss your needs
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Select a Time</span>
          </div>
          
          {/* Cal.com Integration */}
          <div className="aspect-video">
            <cal-inline-widget 
              style={{width: '100%', height: '100%', border: 'none'}}
              data-cal-link="your-organization/consultation"
              data-cal-config='{"layout":"month_view"}'
            />
          </div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (C, A, L) {
                  let p = function (a, ar) {
                    a.q.push(ar);
                  };
                  let d = C.document;
                  C.Cal =
                    C.Cal ||
                    function () {
                      let cal = C.Cal;
                      let ar = arguments;
                      if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];
                        d.head.appendChild(d.createElement("script")).src = A;
                        cal.loaded = true;
                      }
                      if (ar[0] === L) {
                        const api = function () {
                          p(api, arguments);
                        };
                        const namespace = ar[1];
                        api.q = api.q || [];
                        typeof namespace === "string"
                          ? (cal.ns[namespace] = api) && p(api, ar)
                          : p(cal, ar);
                        return;
                      }
                      p(cal, ar);
                    };
                })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init");
              `,
            }}
          />
        </Card>
      </motion.div>
    </section>
  );
}
