'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageCircle, Volume2, Menu, CheckCircle } from "lucide-react";

export default function Page() {
  // State to track whether the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect hook to add/remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on scroll position
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          {/* Logo and Brand Name */}
          <a className="flex items-center space-x-2" href="/">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-2xl text-slate-800">Vocabree</span>
          </a>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a className="text-slate-700 hover:text-indigo-600 transition-colors" href="#features">Features</a>
            <a className="text-slate-700 hover:text-indigo-600 transition-colors" href="#why-vocabree">Why Vocabree</a>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors px-6 py-2 rounded-full">Subscribe</Button>
          </nav>
          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-slate-800" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              {/* Hero Title */}
              <h1 style={{ fontFamily: 'var(--font-roboto)' }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 animate-fade-in-up" 
                
              >
                Expand Your Vocabulary with <span className="text-indigo-600">Vocabree</span>
              </h1>
              {/* Hero Subtitle */}
              <p className="mx-auto max-w-[700px] text-slate-600 text-xl md:text-2xl animate-fade-in-up animation-delay-200">
                Receive a new word delivered to your WhatsApp every day and enhance your English skills effortlessly.
              </p>
              {/* Hero Buttons */}
              <div className="space-x-6 animate-fade-in-up animation-delay-400">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors px-8 py-3 rounded-full text-lg">Get Started for Free</Button>
                <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition-colors px-8 py-3 rounded-full text-lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-20 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 text-slate-900" >Features</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-indigo-600 mb-6" />
                  <CardTitle className="text-2xl font-semibold text-slate-800" >Daily Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg" >
                    Receive a carefully selected word each day to expand your vocabulary.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <MessageCircle className="w-12 h-12 text-purple-600 mb-6" />
                  <CardTitle className="text-2xl font-semibold text-slate-800" >Example Sentences</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg" >
                    Understand usage with relevant example sentences for each word.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Volume2 className="w-12 h-12 text-pink-600 mb-6" />
                  <CardTitle className="text-2xl font-semibold text-slate-800" >Pronunciation Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg" >
                    Learn the correct pronunciation to enhance your spoken English.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Vocabree Section */}
        <section id="why-vocabree" className="w-full py-16 md:py-20 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 text-slate-900" >Why Vocabree?</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Why Vocabree Cards */}
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
                <CheckCircle className="w-16 h-16 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Effortless Learning</h3>
                <p className="text-slate-600 text-lg" >
                  Expand your vocabulary without active searching or studying.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
                <CheckCircle className="w-16 h-16 text-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Daily Consistency</h3>
                <p className="text-slate-600 text-lg" >
                  Build a habit of learning with daily word deliveries.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
                <CheckCircle className="w-16 h-16 text-pink-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Practical Usage</h3>
                <p className="text-slate-600 text-lg" >
                  Learn words in context with example sentences for real-life application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              {/* Subscription Title */}
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
                Start Your Vocabulary Journey Today
              </h2>
              {/* Subscription Description */}
              <p className="mx-auto max-w-[700px] text-indigo-100 text-xl md:text-2xl animate-fade-in-up animation-delay-200">
                Subscribe now to receive your daily word directly to your phone and boost your English skills for just $1 per month!
              </p>
              {/* Subscription Form */}
              <div className="w-full max-w-md space-y-6 animate-fade-in-up animation-delay-400">
                <form className="flex flex-col gap-4">
                  {/* Input for Phone Number */}
                  <Input
                    className="flex-grow bg-white/30 text-white placeholder-indigo-200 border-indigo-300 text-lg py-6 px-4 rounded-full"
                    placeholder="Enter your phone number"
                    type="tel"
                    required
                  />
                  <Button type="submit" className="bg-white hover:bg-indigo-50 text-indigo-600 transition-colors text-lg py-6 px-8 rounded-full">
                    Subscribe via WhatsApp for $1/month
                  </Button>
                </form>
                <p className="text-sm text-indigo-200">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-4 bg-gradient-to-b from-blue-50 to-purple-50 text-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Footer Copyright Text */}
          <p className="text-sm">© 2024 Vocabree. All rights reserved.</p>
          {/* Footer Navigation Links */}
          <nav className="flex gap-6">
            <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
