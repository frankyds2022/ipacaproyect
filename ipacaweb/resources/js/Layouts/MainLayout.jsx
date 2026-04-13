import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import WhatsAppButton from '@/Components/WhatsAppButton';
import SocialSidebar from '@/Components/SocialSidebar';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col font-inter bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <SocialSidebar />
        </div>
    );
}
