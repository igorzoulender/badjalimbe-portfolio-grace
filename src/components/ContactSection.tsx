import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Données du formulaire :", formData);
      toast.success("Message envoyé avec succès !");
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "(+228) 70 05 09 87",
      href: "tel:+22870050987",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gracefelix.b@gmail.com",
      href: "mailto:gracefelix.b@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Lomé, Togo",
      href: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".contact-element");
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-slide-up");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5"></div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <h2 className="section-title text-center">Contact</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-element">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                Passionné par l'innovation technologique et la résolution de
                problèmes complexes, je suis toujours prêt à relever de nouveaux
                défis et à contribuer à des projets ambitieux.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-element">
                  <a
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 cyber-border rounded-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <contact.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                    <div>
                      <p className="text-sm text-foreground/70">
                        {contact.label}
                      </p>
                      <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="contact-element">
              <div className="cyber-border p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gradient mb-4">
                  Qualités Professionnelles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Rigueur",
                    "Adaptabilité",
                    "Innovation",
                    "Leadership",
                    "Résolution",
                    "Excellence",
                  ].map((quality, index) => (
                    <div key={index} className="skill-tag text-center">
                      {quality}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-element">
            <form
              className="space-y-6 cyber-border p-8 rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Nom
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Sujet
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full cyber-border bg-primary hover:bg-primary/80 text-primary-foreground flex items-center justify-center"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {loading ? "Envoi..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
