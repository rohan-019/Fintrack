
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Team Hacknomic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}