import React from 'react';
import { ExternalLink } from 'lucide-react';

export const AccessibilityIntro: React.FC = () => (
  <section>
    <h2 className="text-2xl font-normal text-gray-800 mb-4">Accessibility</h2>
    <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
      This website is developed according to international accessibility standards{' '}
      <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
        WCAG 2.1 AA <ExternalLink size={14} />
      </a>. 
      This means that special technologies and processes have been used to make the content more 
      accessible for people with disabilities in the Republic of Namibia.
    </p>
    <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
      In addition, better accessibility can be achieved by configuring some browser and operation system tools. 
      This page provides information about those possibilities.
    </p>
    <p className="text-[15px] leading-relaxed text-gray-700">
      If you have any questions or encounter accessibility barriers, please contact us at:{' '}
      <a href="mailto:support@ecitizen.gov.na" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
        support@ecitizen.gov.na <ExternalLink size={14} />
      </a>.
    </p>
  </section>
);

export const KeyboardNavigation: React.FC = () => (
  <section>
    <h2 className="text-2xl font-normal text-gray-800 mb-4">Keyboard-only navigation</h2>
    <p className="text-[15px] leading-relaxed text-gray-700">
      This website allows visitors to navigate using only the keyboard. Navigation works by pressing the Tab 
      key repeatedly. Every keypress brings the focus to a next element, ie. link or a button. The element 
      currently in focus is highlighted by a color change and a framed box around it. To activate this element 
      (i.e. "click on it"), press the Enter key.
    </p>
  </section>
);

export const ZoomingSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-normal text-gray-800 mb-4">Zooming in and out</h2>
    <p className="mb-6 text-[15px] leading-relaxed text-gray-700">
      There are three main ways to zoom in on a webpage - using your browser built-in capabilities, using your 
      OS built-in capabilities, or installing a special plug-in for the browser. Our recommendation is to use the 
      easiest way - browser built-in zoom.
    </p>

    <div className="space-y-6 text-[15px] leading-relaxed text-gray-700">
      <div>
        <h3 className="font-bold mb-2">With a browser</h3>
        <p className="mb-2">
          All popular browsers allow zooming in and out by pressing the Ctrl (Cmd in OS X) and + or – keys.
        </p>
        <p>
          Or alternatively, hold down the Ctrl key and scroll up or down with the mouse.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-2">In your operating system</h3>
        <p className="mb-4">
          <strong>Windows</strong> includes "Magnifier", a program that allows zooming. Press the "Start" menu, type "Magnifier" 
          (first letters should do it) and press Enter. A small overlay window appears that can be moved around 
          with the mouse and zooms everything in it.
        </p>
        <p>
          In <strong>Apple</strong> computers, go Apple menu -&gt; System Preferences -&gt; Accessibility (or Universal Access) -&gt; 
          Zoom.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Browser plug-ins</h3>
        <p>
          Browsers have plug-ins that extend the zooming capabilities. Example,{' '}
          <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
            Zoom Page WE <ExternalLink size={14} />
          </a> for Firefox, and{' '}
          <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">
            Zoom for Google Chrome <ExternalLink size={14} />
          </a> for Chrome.
        </p>
      </div>
    </div>
  </section>
);

export const ScreenReaderSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-normal text-gray-800 mb-4">Using a screen reader</h2>
    <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
      A screen reader is a software application that attempts to identify and interpret what is being displayed 
      on the screen. This interpretation is then re-presented to the user with text-to-speech, sound icons, or a 
      Braille output device.
    </p>
    <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
      The content of this website is created in accordance with the screen reader technical standards. For 
      example, pictures have Alt tags, special text-based descriptions; video windows have textual descriptions 
      about whats happening on the screen; structural elements are placed and ordered so that the order of the 
      information read by the screen reader is logical and easy to follow.
    </p>
    <p className="mb-4 text-sm text-gray-700">A choice of popular screen readers:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-700">
      <li><a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">JAWS <ExternalLink size={12} /></a> (Windows)</li>
      <li>VoiceOver (OS X, free, built-in)</li>
      <li><a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1">NVDA <ExternalLink size={12} /></a> (Windows, free)</li>
      <li>Narrator (Windows, built-in)</li>
    </ul>
  </section>
);

export const ReferencesSection: React.FC = () => (
  <section className="pt-8 border-t border-gray-100">
    <h2 className="text-xl font-normal text-gray-800 mb-4">References</h2>
    <a href="#" className="text-[#0055E6] hover:underline inline-flex items-center gap-1 text-[15px]">
      Accessibility notice <ExternalLink size={14} />
    </a>
  </section>
);
