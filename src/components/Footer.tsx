export default function Footer() {

    return (
        <div className="bg-gray-50">
            <footer className="footer max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
                <h2 className="text-2xl mx-3 font-extrabold tracking-tight text-gray-900 mt-5">Jack, Dylan & Sarah Dog 🐶</h2>
                <div className="container mt-5 border-t border-gray-300 pl-3 pr-3">
                    <div className="text-left py-3">
                        <p className="mt-3 text-sm text-gray-500">
                            © {new Date().getFullYear()} <b>jack devey</b>, <b>sarah cantrill</b> & <b>dylan hitchen</b> + cammy buck licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )

}
