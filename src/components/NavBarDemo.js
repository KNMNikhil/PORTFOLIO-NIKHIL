import { Home, User, Briefcase, FileText, MapPin, Mail, Award } from 'lucide-react';
import { NavBar } from "./ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Skills', url: '#', icon: FileText },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Journey', url: '#resume', icon: MapPin },
    { name: 'Achievements', url: '#achievements', icon: Award },
    { name: 'Contact', url: '#', icon: Mail }
  ];

  return <NavBar items={navItems} />;
}