import React from 'react'

const Cookies = () => {
  return (
    <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Nous utilisons des cookies !</h2>

    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Bonjour, ce site utilise des cookies essentiels pour assurer son bon fonctionnement et des cookies de suivi pour comprendre comment vous interagissez avec lui. Ces derniers ne seront activés qu'après votre consentement. <a href="#" className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">Laissez-moi choisir</a>. </p>
    
    
    <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Accepter tout
        </button>

        <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Rejeter tout
        </button>



        <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Fermer
        </button>
    </div>
</section>
  )
}

export default Cookies