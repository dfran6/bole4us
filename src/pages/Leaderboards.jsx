import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboards = () => {
    return (
        <div className="bg-surface font-body text-on-surface min-h-screen">
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center w-full px-6 py-4 mx-auto max-w-screen-2xl">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-2xl font-black italic text-red-700 dark:text-red-500 tracking-tighter font-headline">
                            bole4us
                        </Link>
                        <div className="hidden md:flex gap-6 font-headline font-bold tracking-tight">
                            <Link to="/" className="text-stone-600 dark:text-stone-400 hover:text-red-600 transition-colors">Home</Link>
                            <Link to="/leaderboards" className="text-red-700 dark:text-red-400 border-b-2 border-red-600">Rankings</Link>
                            <Link to="/profile" className="text-stone-600 dark:text-stone-400 hover:text-red-600 transition-colors">Feed</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-stone-600 cursor-pointer p-2 active:scale-95 transition-transform">leaderboard</span>
                        <span className="material-symbols-outlined text-stone-600 cursor-pointer p-2 active:scale-95 transition-transform">notifications</span>
                        <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                            <img alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6CBvY5ogTZEjJHfB_Eh3Bm03Tr37Ppr2PnZ6zTqV4WAcOqzvBSiLCHLrOxW4fXumUXeVHez_p7BrWOw-iU29e8Nvq2iLYIP33OZ1iLxjWevPXBtJRcvY9bXU8chmlsLVYg2FCSmpPHSAjX9uq1PLv3dW_P_wzZfta9rEY1cT7McwoSIU033PI3vEQkQ6mnzns0p1MGR1p-u7Ngm9rFOAuPPfEE00ndQ9Nh6iqN4-4rb1T2qQFmyuUgNKkSTn57tnUoFVIGiQ1z0A" />
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="pt-24 pb-32 px-6 max-w-screen-2xl mx-auto">
                <section className="mb-16 relative rounded-[2.5rem] overflow-hidden hero-gradient p-8 md:p-16 bg-red-700 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h1 className="font-headline font-black text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
                            Bole Battleground: <br /><span className="text-secondary-fixed">The Leaderboards</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg mb-8">
                            Where the heat meets the street. Track the best grillers, the hungriest legends, and the platters taking over the city.
                        </p>
                        <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-bold text-lg active:translate-y-1 transition-all flex items-center gap-2 mx-auto md:mx-0">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                            Join Competition
                        </button>
                    </div>
                    <div className="relative w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSXlEzaAcgRKnat_w9ifUtllICZXG2Cq7Kbg_ZM9BmVI0edcCGxOPLgmq6vjVUo9OugVepGTocqr_BBmgwRhPmQ5_LLuVFFKlY3gDDvVP9rA_aWZtIk6UiLZ_EFsXsOS0tHZ4CGR2PH4RE0SwUiwoOdY79rc62zUQtmLaTFslg_i9Jx4AvYKojQN07yFgW1KiNQNtel4u23dKFy2fLp_UB4veolDvjIiiGeuorKov9R2I9_8cliiI3E-DkKGFBAPEGViAFbHEXns" />
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-end justify-between px-2">
                            <div>
                                <span className="text-secondary font-black text-xs tracking-widest uppercase">Community Favorite</span>
                                <h2 className="font-headline font-bold text-3xl text-on-surface">Highest Rated Stores</h2>
                            </div>
                            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                        </div>
                        <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-4">
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="pt-8 flex flex-col items-center">
                                    <div className="relative mb-3">
                                        <div className="w-16 h-16 rounded-full border-4 border-stone-300 overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHmoNiAirYxZZH5rRXyqP-ATzJQOHivJsLt4Yy2nekDMofkwL02CmwY6BtqmSvEbSkiPywZ6JjQiQ6HY-R0AkpggORQdSATGc-hWIXr_cZ7-YYCkU5tHg73UiQ3_WnWOtiM-IVzK7TETLMfz1YgJWrnE4bKJoRPe-e03ULlXepZAw3Qu5hEl_T3z3BpGIN32WC9kx4zeVg7ks3tgAGRV288AyKiDuhN0lhaEmL9AGalitnYfi3KMWTEf3garQwbVuQt5xn2UmXyo" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-stone-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                    </div>
                                    <span className="font-bold text-sm text-center">Firehouse Grill</span>
                                    <span className="text-xs text-stone-500">4.8 (890)</span>
                                </div>
                                <div className="flex flex-col items-center scale-110">
                                    <span className="material-symbols-outlined text-secondary-fixed mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                                    <div className="relative mb-3">
                                        <div className="w-20 h-20 rounded-full border-4 border-secondary-fixed overflow-hidden ring-4 ring-secondary-fixed/20">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFGUbzKCmwEjouFq1HJxGYdVkSkeHcWtukWdw7rSK4YFkehoZpZN8Ham5pwK1fdV5_aLebZv_UmrVm7KVu0gElzzPy2tqPiIhiB9L4eCNj94BfmEGup5HV6gj1zrammW0fNoAie7aogZhR8eeT8FgWKIvTJXWNIxT3ptZe5HEKQaW7ZdyKZ5-265aWL-JqaN7n2ubtYr193p3UNjPSueUDAqr1Xv_yrme1J78hwi50ivwForN8j70W47W2veL0T_3NMAlqsgflx40" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-secondary-fixed w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg">1</div>
                                    </div>
                                    <span className="font-black text-base text-center">Mama Bole Elite</span>
                                    <span className="bg-primary text-white text-[8px] font-black px-2 py-0.5 rounded-full mt-1 tracking-tighter uppercase">Master Griller</span>
                                </div>
                                <div className="pt-10 flex flex-col items-center">
                                    <div className="relative mb-3">
                                        <div className="w-14 h-14 rounded-full border-4 border-amber-600/40 overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAAZkuNIW_CLDMUk-0BdDALxDUd7N_NCc1i7t-Lme5fdtetnOgCkQi6AVrTBBIQzB9DfZfKyo9LdW7Pxxb7vFMpMzNX9JoqPJ-e1D_jAMXzX0fpL344VJrT-EpWMZlbIhJuKZ13hA8aGcCd2qbV3YS3cqMBasjKtYH8j0fWG737k97QK2EMtDghCtjslIPjgzbkTFGyDNycI6ZWCbabaamrLyKtVwNvvpXA7qgHwqSJIQqG_0HQtWcrKOwOadwW19eXo2dy0qyh2k" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-amber-600/40 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                    </div>
                                    <span className="font-bold text-sm text-center">Portside Sizzle</span>
                                    <span className="text-xs text-stone-500">4.7 (1.2k)</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-2xl hover:bg-yellow-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <span className="font-headline font-bold text-outline-variant text-xl w-6">4</span>
                                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-aIEDPRty66YKrvM30JNrIC5sgUfIreLSyHZDERVNbIWeQOKaBs7C8tN_k1IK9o2e7YyWNtNbDBnwpXSUURGEBOBDVs_b03wGODwktEV9Iq7d9SIfGv9MV23qV97QKsczaldXyx6uCvxPGZiYNuxnnD6SrWuIzLDdM3iH6FhoR0BQTria62oYJnjsth9qDxsfoFRJG7AaAyLqI498ZY-xss9g588Pe0SwUxW3mIWIE52qB3ZHo9W_ht_BsIEbQ3l9QFoVxD8JG_U" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-on-surface">Uncle B's Special</h4>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-secondary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="text-xs font-bold">4.6</span>
                                                <span className="text-[10px] text-stone-400 font-medium">(452 reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors">trending_up</span>
                                </div>
                                <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-2xl hover:bg-yellow-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <span className="font-headline font-bold text-outline-variant text-xl w-6">5</span>
                                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7yRxL0jy89KwpybQBXSPuKVlCacSdPxiAE9U2l8GeCDrktyOw7VAqK_tqLmT4AIhMDJM3VJzmyWv60gudpCF2CcFOh9rB_a4d4_isiybZFJyKJypGvj7KLfi5h2Iuv04ybLaKo8XUog7QRlUcskWb8qv6-4cd7590NMxT26EvJBhznFeI_1gDXxYLs2QKITnKus8HH5KnSoJVYausPomSWVsikCxHIvH71f7UACXYOtCEm7wof05zIN7eELf22kx8NWaT6zzrDYg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-on-surface">Spicy Fish Junction</h4>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-secondary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="text-xs font-bold">4.5</span>
                                                <span className="text-[10px] text-stone-400 font-medium">(210 reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors">trending_up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-end justify-between px-2">
                            <div>
                                <span className="text-primary font-black text-xs tracking-widest uppercase">The Heavyweights</span>
                                <h2 className="font-headline font-bold text-3xl text-on-surface">Bole Legends</h2>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-[2rem] p-6">
                            <div className="space-y-4">
                                <div className="relative bg-white p-5 rounded-2xl shadow-sm border-l-4 border-secondary-fixed">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMlO2UpfRlf8dZ789ja7-qGx2mPXVc0HBXRK0C66UCCvWV-PY_ZDc8LR7o2VTG7EodDsuhgHc02wTDLm3U744aeGtxogKej4sJtzsZszIx5dGRfRDO61q3sUXbuIhledJ01SexyEVz6fsuj_taz-cRrrTp6XRTvCtth2et2bK-YcrssmqKw8U-1Mch0R2IK0lTJmEwN6DKd7sEN2eh5oFPJdWWhVc-29p5E9svJDO39SVs9YfEhfu29XFUy0gOpWzlKyfQtwjitmA" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-bold text-on-surface">Tobi "Bole Baron" K.</h4>
                                                <span className="text-primary font-black text-xl">142</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary-fixed px-2 py-0.5 rounded">Golden Grill Fanatic</span>
                                                <span className="text-[10px] text-stone-400 uppercase font-bold">Orders this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-white p-5 rounded-2xl shadow-sm border-l-4 border-stone-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full border-2 border-stone-200 overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ytSAUvrcbluGZ8ZxNM9_UyQO_VEwf-UaqeMKewA9yL815CFi4SDSEPFomf4Tzr8y9HrOBXnLXQzojsaqLFTaZ1YopvB4Y8GV_55MjTDdJVSbLLqAFtsytc05p0L6lT8wpO2Ppmtufumn3y3AbXhrqPTebmwdUmNZPjDjH7teRWntLa5NeoQSbaD8-0pt_0PNEBD_fjWC_xf-L0kyVPLHYkRZ9V7KEDmc81fihSYE1RfQLj9rsXU9RsseFtHiVud4YCVxYisabxg" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-bold text-on-surface">Sarah J.</h4>
                                                <span className="text-stone-700 font-black text-xl">118</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Yam Conqueror</span>
                                                <span className="text-[10px] text-stone-400 uppercase font-bold">Orders this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-white p-5 rounded-2xl shadow-sm border-l-4 border-stone-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full border-2 border-stone-200 overflow-hidden">
                                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8zuco6JaFIeM2LIJB_FzqDic6SOzYtdqY0cOFFP_WWpyPci-OdHWNvIgLv9MOVfIi8h9oFvwo4CVjGiaBf8Ofy07UwGPz_5s3d1XcYn_a6v233n3zPTGIiEEeF19hTkv1JL3S7YpiM3ksxRSLYAOD5NYkHeBxBfIehe9gMLMn0QbXOfEsYjvn7HXr_WYGdM3pyr8Ktlzft6C3R26UnUTMtnbj8DEL4UXN_1AdCehJyRnm4d3-zNF5dKl5hSOm2t6XtJPZTUWDYIU" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-bold text-on-surface">Chef Victor</h4>
                                                <span className="text-stone-700 font-black text-xl">95</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Plantain Patron</span>
                                                <span className="text-[10px] text-stone-400 uppercase font-bold">Orders this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-4 text-primary font-bold text-sm uppercase tracking-widest hover:bg-white rounded-xl transition-all">View Full Hall of Fame</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-12 space-y-6">
                        <div className="flex items-end justify-between px-2">
                            <div>
                                <span className="text-secondary font-black text-xs tracking-widest uppercase">The Daily Sizzle</span>
                                <h2 className="font-headline font-bold text-3xl text-on-surface">Most Popular Platters</h2>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-[2.5rem] p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                                    <div className="h-48 relative overflow-hidden">
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHzl7DAfPsdNh3maS4i-J0Z2HJ3kVa6tTzZQ9aNrP4xvCARKN-uONu_rlVVoJTWNRjiLowCy-qRGIqTHg8U_kTC9Wwe768-DEr_qecfh4DRxuVDsxJ9tJk25ebL2wn5fJD0xwFmDO0auued-U4Aibiq7fDki2APYvvfRFbbUBq-Wmpe13Jr1Wd_drP3cCJzWRDu-mupPO4RCjzUAaCS-GMLpMsHcTZFHd5DpVKX3IjNJVY1uxve5xlZYJ6bgB25tP9HRagRBBpSYQ" />
                                        <div className="absolute top-4 left-4 bg-secondary-fixed text-on-secondary-fixed font-black px-3 py-1 rounded-full text-xs flex items-center gap-1">
                                            <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                                            #1 Trending
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-headline font-bold text-xl leading-tight">The Triple Treat: 3 Bole + 1 Fish</h3>
                                            <span className="font-black text-primary">8.4k</span>
                                        </div>
                                        <p className="text-sm text-stone-500 mb-4">Our iconic charred plantain paired with spicy grilled croaker. The city's favorite.</p>
                                        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                                            <span className="text-xs font-bold text-stone-400 uppercase">Top Vendor</span>
                                            <span className="text-xs font-black text-on-surface">Mama Bole Elite</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                                    <div className="h-48 relative overflow-hidden">
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa6CvyslHOEj-9A2i2MzjPYoc71e54psWBPnPIAv206pqmws-7Q8SXOtCrsa38R497SgL3faqD8Mc4Vi63XQt2rYpjnR7Vckhz3lm1CYpqCgSp9nELqERPcVSsqyjgnv982phowCjwNumWoII_fLenzgET2t2Z9jYh_MZ92BPr5K7fJ15JvCCqnUrM2efEp4gl3r_QF5ciO0PsDBcq0yxgAob2V6e4m74gG6yd6m1M4kaqR30N49iRJpSH3o6aHYcGrjw24Aos1e8" />
                                        <div className="absolute top-4 left-4 bg-stone-100 text-stone-600 font-black px-3 py-1 rounded-full text-xs">
                                            #2 Top Choice
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-headline font-bold text-xl leading-tight">Yam &amp; Croaker Delight</h3>
                                            <span className="font-black text-primary">6.2k</span>
                                        </div>
                                        <p className="text-sm text-stone-500 mb-4">Slow-roasted yam slices with a generous helping of peppery sauce and fish.</p>
                                        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                                            <span className="text-xs font-bold text-stone-400 uppercase">Top Vendor</span>
                                            <span className="text-xs font-black text-on-surface">Portside Sizzle</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                                    <div className="h-48 relative overflow-hidden">
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDamV0JWmd8z-EPi9L5GNslNttoNzMEApR55TPLPP_FWstydjKPVtZ_RC500uRSPt4GiCFAHWjC1Dgs82o4GYqVJuLyv9Abl5s_J5Vym96ChzJj4JKk82dGETt34HCz67m80KezzAAC--uPRndeHpJdXAM4RV6tH7-CNt6pprreg2MsgGQQEge214XUQFYBTHvYMbbXzb33F7Ea3I76AgTF4vsgR_8Vi8ZE7N7ZOU8_r6EUXdhwfjrVc4EJoUzo45bArhBN1enA9PI" />
                                        <div className="absolute top-4 left-4 bg-stone-100 text-stone-600 font-black px-3 py-1 rounded-full text-xs">
                                            #3 Rising Star
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-headline font-bold text-xl leading-tight">The Family Feast Combo</h3>
                                            <span className="font-black text-primary">5.8k</span>
                                        </div>
                                        <p className="text-sm text-stone-500 mb-4">6 Bole pieces, 2 Fish, and unlimited extra spicy sauce for the whole squad.</p>
                                        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                                            <span className="text-xs font-bold text-stone-400 uppercase">Top Vendor</span>
                                            <span className="text-xs font-black text-on-surface">Firehouse Grill</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <nav className="md:hidden fixed bottom-0 w-full rounded-t-[2rem] z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-lg border-t border-stone-200/50 dark:border-stone-800/50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
                <div className="fixed bottom-0 left-0 w-full flex justify-around items-end px-6 pb-6 pt-2">
                    <Link to="/" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 p-2 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Home</span>
                    </Link>
                    <Link to="/leaderboards" className="flex flex-col items-center justify-center bg-red-600 text-white rounded-full p-3 -translate-y-4 shadow-lg shadow-red-500/40 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined">military_tech</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Rankings</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 p-2 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined">restaurant</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Feed</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 p-2 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Leaderboards;
