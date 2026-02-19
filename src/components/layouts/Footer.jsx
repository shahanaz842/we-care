import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/asset/care-logo.png"
                                alt="We Care Logo"
                                width={32}
                                height={32}
                            />
                            <span className="text-2xl font-bold tracking-tight text-neutral">
                                We <span className="text-primary">Care</span>
                            </span>
                        </Link>
                        <p className="text-neutral/70 max-w-xs text-sm leading-6">
                            Making caregiving easy, secure, and accessible for everyone.
                            Compassionate care for the ones you love most.
                        </p>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="#" className="text-neutral/50 hover:text-primary transition-all hover:-translate-y-1">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>

                            {/* Instagram - Essential for showing "behind the scenes" care */}
                            <a href="#" className="text-neutral/50 hover:text-primary transition-all hover:-translate-y-1">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>

                            {/* LinkedIn - Great for professional caregiving credentials */}
                            <a href="#" className="text-neutral/50 hover:text-primary transition-all hover:-translate-y-1">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase">Services</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><Link href="/child-care" className="text-sm text-neutral/70 hover:text-primary">Child Care</Link></li>
                                    <li><Link href="/elderly-care" className="text-sm text-neutral/70 hover:text-primary">Elderly Care</Link></li>
                                    <li><Link href="/special-needs" className="text-sm text-neutral/70 hover:text-primary">Special Needs</Link></li>
                                    <li><Link href="/housekeeping" className="text-sm text-neutral/70 hover:text-primary">Housekeeping</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><Link href="/help" className="text-sm text-neutral/70 hover:text-primary">Help Center</Link></li>
                                    <li><Link href="/safety" className="text-sm text-neutral/70 hover:text-primary font-medium text-accent">Safety Center</Link></li>
                                    <li><Link href="/contact" className="text-sm text-neutral/70 hover:text-primary">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><Link href="/about" className="text-sm text-neutral/70 hover:text-primary">About Us</Link></li>
                                    <li><Link href="/blog" className="text-sm text-neutral/70 hover:text-primary">Blog</Link></li>
                                    <li><Link href="/careers" className="text-sm text-neutral/70 hover:text-primary">Careers</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-neutral tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><Link href="/privacy" className="text-sm text-neutral/70 hover:text-primary">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="text-sm text-neutral/70 hover:text-primary">Terms of Service</Link></li>
                                    <li><Link href="/cookie" className="text-sm text-neutral/70 hover:text-primary">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-neutral/50">
                        &copy; {new Date().getFullYear()} We Care Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-xs text-neutral/50">
                            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                            Platform Status: Online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;