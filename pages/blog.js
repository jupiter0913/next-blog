import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'


export default function Blog() {
  return (
    <>
    <header>
    <Script src="https://unpkg.com/flowbite-typography@1.0.3/dist/typography.min.css"></Script>
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center px-4 mx-auto max-w-screen-xl">
                <a href="https://flowbite.com"
                    className="flex items-center hover:text-primary-600 dark:hover-text-primary-500">
                    <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="#"
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
                        started</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <div className="hidden mb-6 xl:block lg:w-52">
                <div className="sticky top-6">
                    <aside aria-labelledby="reactions-label" className="mb-2">
                        <h3 id="reactions-label" className="sr-only">Reactions</h3>
                        <div className="flex items-center justify-between mb-2">
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C"/>
                                    <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D"/>
                                </svg>
                                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">75</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.333 5.83236L7.66634 0.499023H0.333008L9.66634 11.8324L17.347 8.66569L12.333 5.83236Z" fill="#55ACEE"/>
                                    <path d="M16.9997 0.499023L12.333 5.83236L15.9263 10.707L16.7443 9.71436L24.333 0.499023H16.9997Z" fill="#3B88C3"/>
                                    <path d="M15.8401 11.184C15.8934 11.0393 15.9274 10.8853 15.9274 10.722C15.9274 9.98601 15.3301 9.38867 14.5941 9.38867H10.1494C9.41274 9.38867 8.81608 9.98601 8.81608 10.722C8.81608 10.8853 8.84941 11.0393 8.90341 11.184C6.73141 12.4013 5.26074 14.722 5.26074 17.3887C5.26074 21.316 8.44408 24.5 12.3721 24.5C16.2994 24.5 19.4834 21.316 19.4834 17.3887C19.4827 14.722 18.0127 12.4013 15.8401 11.184Z" fill="#FFAC33"/>
                                    <path d="M12.3724 22.7214C15.3179 22.7214 17.7057 20.3335 17.7057 17.388C17.7057 14.4425 15.3179 12.0547 12.3724 12.0547C9.42688 12.0547 7.03906 14.4425 7.03906 17.388C7.03906 20.3335 9.42688 22.7214 12.3724 22.7214Z" fill="#FFD983"/>
                                    <path d="M14.5202 20.9199C14.4255 20.9199 14.3308 20.8906 14.2495 20.8326L12.3348 19.4599L10.4208 20.8326C10.2575 20.9493 10.0388 20.9493 9.87682 20.8306C9.71482 20.7133 9.64682 20.5046 9.70682 20.3146L10.4208 18.0106L8.52415 16.6739C8.36282 16.5553 8.29615 16.3459 8.35748 16.1553C8.41948 15.9653 8.59615 15.8359 8.79682 15.8346L11.1461 15.8313L11.8942 13.5846C11.9575 13.3946 12.1348 13.2666 12.3355 13.2666C12.5355 13.2666 12.7135 13.3946 12.7768 13.5846L13.5122 15.8313L15.8735 15.8346C16.0742 15.8359 16.2515 15.9653 16.3128 16.1553C16.3748 16.3459 16.3075 16.5546 16.1462 16.6739L14.2488 18.0106L14.9628 20.3146C15.0242 20.5053 14.9548 20.7133 14.7935 20.8306C14.7115 20.8906 14.6155 20.9199 14.5202 20.9199Z" fill="#FFAC33"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">23</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0905 17.9535C22.642 12.99 20.167 10.5 20.167 10.5L15.667 4.5H9.66699L5.16699 10.5C5.16699 10.5 4.10274 11.5747 3.24174 13.7062C1.74999 14.2013 0.666992 15.5918 0.666992 17.25C0.666992 18.336 1.13574 19.3065 1.87374 19.9913C1.59174 20.5177 1.41699 21.1103 1.41699 21.75C1.41699 23.2185 2.26899 24.477 3.49824 25.092C4.46049 26.5335 5.74599 27 6.66699 27H18.667C19.7012 27 21.1967 26.4157 22.1755 24.5175C23.6237 23.9992 24.667 22.6275 24.667 21C24.667 19.7415 24.0415 18.6345 23.0905 17.9535ZM12.667 4.5C13.0795 4.5 13.4605 4.3815 13.792 4.188C14.1242 4.3815 14.5052 4.5 14.917 4.5C16.1597 4.5 17.917 2.742 17.917 1.5C17.917 1.5 17.917 0 16.417 0C15.826 0 15.667 0.75 14.917 0.75C14.167 0.75 14.167 0 12.667 0C11.167 0 11.167 0.75 10.417 0.75C9.66699 0.75 9.50874 0 8.91699 0C7.41699 0 7.41699 1.5 7.41699 1.5C7.41699 2.742 9.17499 4.5 10.417 4.5C10.8287 4.5 11.2097 4.3815 11.542 4.188C11.8742 4.3815 12.2552 4.5 12.667 4.5Z" fill="#FDD888"/>
                                    <path d="M17.167 4.5C17.167 4.914 16.8317 5.25 16.417 5.25H8.91699C8.50299 5.25 8.16699 4.914 8.16699 4.5C8.16699 4.086 8.50299 3.75 8.91699 3.75H16.417C16.8317 3.75 17.167 4.086 17.167 4.5Z" fill="#BF6952"/>
                                    <path d="M17.0925 18.4065C17.0925 15.0487 10.6568 15.2677 10.6568 13.242C10.6568 12.261 11.6325 11.7817 12.765 11.7817C14.6685 11.7817 15.0075 12.9585 15.8693 12.9585C16.479 12.9585 16.773 12.5887 16.773 12.174C16.773 11.211 15.255 10.482 13.7993 10.23V9.3C13.7993 8.72025 13.3118 8.25 12.7088 8.25C12.105 8.25 11.6168 8.72025 11.6168 9.3V10.2622C10.0298 10.6095 8.66402 11.6685 8.66402 13.3942C8.66402 16.6185 15.0983 16.488 15.0983 18.753C15.0983 19.5382 14.2148 20.3227 12.765 20.3227C10.5893 20.3227 9.86477 18.906 8.98127 18.906C8.55077 18.906 8.16602 19.254 8.16602 19.779C8.16602 20.6137 9.61952 21.6172 11.6183 21.897L11.6175 21.9045V22.953C11.6175 23.532 12.1065 24.003 12.7095 24.003C13.3125 24.003 13.8008 23.532 13.8008 22.953V21.9045C13.8008 21.8917 13.7948 21.882 13.794 21.8707C15.5925 21.5482 17.0925 20.4217 17.0925 18.4065Z" fill="#67757F"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">18</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75255 5.29787C7.67789 5.37254 7.62122 5.46254 7.57388 5.56121L7.56855 5.55587L0.0910439 22.4003L0.0983774 22.4076C-0.0402924 22.6763 0.191713 23.223 0.667057 23.699C1.1424 24.1743 1.68908 24.4063 1.95775 24.2676L1.96442 24.2743L18.8088 16.7961L18.8035 16.7901C18.9015 16.7435 18.9915 16.6868 19.0668 16.6108C20.1082 15.5694 18.4195 12.1927 15.2961 9.06862C12.1713 5.94455 8.79458 4.25651 7.75255 5.29787Z" fill="#DD2E44"/>
                                    <path d="M8.66858 8.30273L0.279048 21.9737L0.0910439 22.3971L0.0983774 22.4044C-0.0402924 22.6731 0.191713 23.2197 0.667057 23.6958C0.821728 23.8504 0.982398 23.9678 1.13973 24.0671L11.3353 11.6361L8.66858 8.30273Z" fill="#EA596E"/>
                                    <path d="M15.3439 9.01304C18.4573 12.1278 20.186 15.4479 19.2033 16.4292C18.2213 17.4119 14.9012 15.6839 11.7858 12.5705C8.67174 9.45572 6.9437 6.13431 7.92573 5.15228C8.90841 4.17026 12.2285 5.8983 15.3439 9.01304Z" fill="#A0041E"/>
                                    <path d="M12.3913 9.37694C12.2587 9.48427 12.0853 9.54028 11.902 9.52028C11.3233 9.45761 10.8366 9.25627 10.496 8.93826C10.1353 8.60159 9.95727 8.14958 10.0059 7.6969C10.0913 6.90221 10.8886 6.17286 12.248 6.31953C12.7767 6.3762 13.0127 6.2062 13.0207 6.12486C13.03 6.04419 12.836 5.82752 12.3073 5.77019C11.7286 5.70752 11.242 5.50618 10.9006 5.18817C10.54 4.8515 10.3613 4.39949 10.4106 3.94681C10.4973 3.15213 11.294 2.42278 12.652 2.57011C13.0373 2.61145 13.2407 2.53211 13.3267 2.48078C13.3954 2.43878 13.4227 2.39878 13.4254 2.37544C13.4334 2.29477 13.242 2.0781 12.712 2.02077C12.346 1.98077 12.0807 1.65276 12.1213 1.28608C12.1607 0.920076 12.488 0.655404 12.8553 0.695405C14.2134 0.841408 14.8374 1.72343 14.7514 2.51878C14.6647 3.3148 13.868 4.04281 12.5087 3.89681C12.1233 3.85481 11.922 3.93481 11.8353 3.98615C11.7666 4.02748 11.7386 4.06815 11.736 4.09082C11.7273 4.17215 11.92 4.38816 12.45 4.44549C13.808 4.59216 14.432 5.47351 14.346 6.26887C14.26 7.06355 13.4634 7.7929 12.1047 7.64557C11.7193 7.60423 11.5166 7.68423 11.43 7.7349C11.3606 7.77757 11.334 7.81757 11.3313 7.84024C11.3226 7.9209 11.5153 8.13758 12.0447 8.19491C12.41 8.23491 12.676 8.56359 12.6353 8.92959C12.6167 9.11226 12.524 9.27027 12.3913 9.37694Z" fill="#AA8DD8"/>
                                    <path d="M20.4411 15.5411C21.7565 15.1698 22.6638 15.7565 22.8798 16.5265C23.0958 17.2958 22.6278 18.2699 21.3131 18.6399C20.7998 18.7839 20.6458 19.0292 20.6665 19.1072C20.6891 19.1859 20.9498 19.3152 21.4618 19.1706C22.7765 18.8005 23.6839 19.3872 23.8999 20.1566C24.1172 20.9266 23.6479 21.8993 22.3325 22.27C21.8198 22.414 21.6651 22.66 21.6878 22.738C21.7098 22.816 21.9698 22.9453 22.4825 22.8013C22.8358 22.702 23.2052 22.908 23.3045 23.262C23.4032 23.6167 23.1972 23.9847 22.8425 24.0847C21.5285 24.4547 20.6205 23.8693 20.4031 23.0986C20.1871 22.3293 20.6558 21.3566 21.9718 20.9859C22.4852 20.8413 22.6392 20.5966 22.6165 20.5179C22.5952 20.4399 22.3352 20.3099 21.8232 20.4539C20.5071 20.8246 19.6004 20.2392 19.3838 19.4679C19.1671 18.6985 19.6358 17.7259 20.9511 17.3545C21.4631 17.2112 21.6171 16.9645 21.5958 16.8872C21.5731 16.8085 21.3138 16.6792 20.8011 16.8232C20.4465 16.9232 20.0791 16.7165 19.9791 16.3625C19.8798 16.0092 20.0864 15.6411 20.4411 15.5411Z" fill="#77B255"/>
                                    <path d="M15.3333 13.7449C15.1373 13.7449 14.9439 13.6589 14.8119 13.4949C14.5819 13.2069 14.6292 12.7875 14.9159 12.5575C15.0612 12.4409 18.528 9.71812 23.4274 10.4188C23.7921 10.4708 24.0455 10.8081 23.9935 11.1728C23.9415 11.5368 23.6068 11.7928 23.2388 11.7382C18.91 11.1235 15.7806 13.5742 15.7499 13.5989C15.6259 13.6975 15.4793 13.7449 15.3333 13.7449Z" fill="#AA8DD8"/>
                                    <path d="M3.83539 10.9697C3.77205 10.9697 3.70739 10.9604 3.64338 10.9417C3.29071 10.8357 3.0907 10.4643 3.19671 10.1117C3.95206 7.59628 4.63674 3.58219 3.79539 2.5355C3.70138 2.41683 3.55938 2.30016 3.23404 2.32483C2.60869 2.37283 2.66803 3.69219 2.66869 3.70552C2.69669 4.07287 2.42069 4.39287 2.05401 4.42021C1.68134 4.44287 1.36666 4.1722 1.33933 3.80486C1.27066 2.8855 1.55667 1.1148 3.13404 0.995461C3.83805 0.942127 4.42273 1.1868 4.83541 1.70014C6.41611 3.66752 4.81141 9.37099 4.47407 10.495C4.3874 10.7837 4.12206 10.9697 3.83539 10.9697Z" fill="#77B255"/>
                                    <path d="M16.999 7.63774C17.5513 7.63774 17.9991 7.19002 17.9991 6.63772C17.9991 6.08542 17.5513 5.6377 16.999 5.6377C16.4467 5.6377 15.999 6.08542 15.999 6.63772C15.999 7.19002 16.4467 7.63774 16.999 7.63774Z" fill="#5C913B"/>
                                    <path d="M1.33336 13.6355C2.06976 13.6355 2.66673 13.0385 2.66673 12.3021C2.66673 11.5657 2.06976 10.9688 1.33336 10.9688C0.596967 10.9688 0 11.5657 0 12.3021C0 13.0385 0.596967 13.6355 1.33336 13.6355Z" fill="#9266CC"/>
                                    <path d="M21.666 14.3047C22.2183 14.3047 22.6661 13.857 22.6661 13.3047C22.6661 12.7524 22.2183 12.3047 21.666 12.3047C21.1137 12.3047 20.666 12.7524 20.666 13.3047C20.666 13.857 21.1137 14.3047 21.666 14.3047Z" fill="#5C913B"/>
                                    <path d="M15.666 22.3038C16.2183 22.3038 16.6661 21.856 16.6661 21.3037C16.6661 20.7514 16.2183 20.3037 15.666 20.3037C15.1137 20.3037 14.666 20.7514 14.666 21.3037C14.666 21.856 15.1137 22.3038 15.666 22.3038Z" fill="#5C913B"/>
                                    <path d="M18.6683 4.30052C19.4047 4.30052 20.0017 3.70355 20.0017 2.96715C20.0017 2.23076 19.4047 1.63379 18.6683 1.63379C17.9319 1.63379 17.335 2.23076 17.335 2.96715C17.335 3.70355 17.9319 4.30052 18.6683 4.30052Z" fill="#FFCC4D"/>
                                    <path d="M21.6699 6.9688C22.2222 6.9688 22.67 6.52107 22.67 5.96877C22.67 5.41648 22.2222 4.96875 21.6699 4.96875C21.1176 4.96875 20.6699 5.41648 20.6699 5.96877C20.6699 6.52107 21.1176 6.9688 21.6699 6.9688Z" fill="#FFCC4D"/>
                                    <path d="M19.668 9.63384C20.2203 9.63384 20.668 9.18611 20.668 8.63381C20.668 8.08151 20.2203 7.63379 19.668 7.63379C19.1157 7.63379 18.668 8.08151 18.668 8.63381C18.668 9.18611 19.1157 9.63384 19.668 9.63384Z" fill="#FFCC4D"/>
                                    <path d="M5.00198 16.9668C5.55427 16.9668 6.002 16.5191 6.002 15.9668C6.002 15.4145 5.55427 14.9668 5.00198 14.9668C4.44968 14.9668 4.00195 15.4145 4.00195 15.9668C4.00195 16.5191 4.44968 16.9668 5.00198 16.9668Z" fill="#FFCC4D"/>
                                    </svg>
                                    
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">14</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12C24 18.6273 18.6273 24 12 24C5.37267 24 0 18.6273 0 12C0 5.37267 5.37267 0 12 0C18.6273 0 24 5.37267 24 12Z" fill="#FFCC4D"/>
                                    <path d="M12.0008 14.5657C10.0234 14.5657 8.71076 14.335 7.08809 14.0197C6.71676 13.949 5.99609 14.0197 5.99609 15.1117C5.99609 17.295 8.50476 20.0244 12.0008 20.0244C15.4968 20.0244 18.0054 17.295 18.0054 15.1117C18.0054 14.0197 17.2841 13.9484 16.9134 14.0197C15.2908 14.335 13.9788 14.5657 12.0008 14.5657Z" fill="#664500"/>
                                    <path d="M11.1003 2.18723C10.5276 0.566561 8.75092 -0.284106 7.12959 0.287227C6.14559 0.633894 5.44892 1.42789 5.17759 2.35656C4.38359 1.80389 3.34359 1.62323 2.36092 1.96989C0.740921 2.54189 -0.111079 4.31989 0.461587 5.94056C0.542921 6.16989 0.650921 6.38256 0.776254 6.57923C2.07692 8.96723 5.83492 10.6459 8.11025 10.6666C9.86825 9.22189 11.7409 5.55656 11.2556 2.88189C11.2303 2.64989 11.1803 2.41656 11.1003 2.18723ZM12.9003 2.18723C13.4729 0.566561 15.2503 -0.284106 16.8709 0.287227C17.8549 0.633894 18.5516 1.42789 18.8236 2.35656C19.6176 1.80389 20.6576 1.62323 21.6403 1.96989C23.2603 2.54189 24.1116 4.31989 23.5403 5.94056C23.4583 6.16989 23.3509 6.38256 23.2249 6.57923C21.9243 8.96723 18.1663 10.6459 15.8903 10.6666C14.1323 9.22189 12.2603 5.55656 12.7456 2.88189C12.7703 2.64989 12.8203 2.41656 12.9003 2.18723Z" fill="#DD2E44"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">75</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.333 12C24.333 18.6273 18.9603 24 12.333 24C5.70567 24 0.333008 18.6273 0.333008 12C0.333008 5.37267 5.70567 0 12.333 0C18.9603 0 24.333 5.37267 24.333 12Z" fill="#FFCC4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16052 7.34497C1.32052 7.5043 2.11918 7.98297 2.27852 8.46164C2.43852 8.93964 2.75852 11.651 3.71718 12.449C4.70585 13.2703 8.43518 12.965 9.14918 12.609C10.7472 11.8123 10.9432 9.5883 11.2258 8.46164C11.3852 7.82364 12.3438 7.82364 12.3438 7.82364C12.3438 7.82364 13.3025 7.82364 13.4625 8.46097C13.7452 9.5883 13.9425 11.8123 15.5392 12.6083C16.2538 12.965 19.9832 13.271 20.9732 12.4496C21.9305 11.6516 22.2498 8.9403 22.4098 8.46164C22.5685 7.98364 23.3685 7.50497 23.5279 7.34564C23.6885 7.1863 23.6885 6.5483 23.5279 6.3883C23.2085 6.06964 19.4385 5.78564 15.3792 6.22897C14.5692 6.31764 14.2612 6.54764 12.3432 6.54764C10.4265 6.54764 10.1172 6.31697 9.30785 6.22897C5.25118 5.78497 1.48052 6.06897 1.16052 6.38764C1.00118 6.54697 1.00118 7.18564 1.16052 7.34497Z" fill="#292F33"/>
                                    <path d="M18.5567 15.7527C18.4381 15.6454 18.2607 15.6387 18.1334 15.7334C18.1074 15.7527 15.5187 17.6667 12.3334 17.6667C9.15605 17.6667 6.55872 15.7527 6.53338 15.7334C6.40605 15.6387 6.22872 15.6467 6.11005 15.7527C5.99205 15.8594 5.96538 16.0354 6.04738 16.1714C6.13338 16.3147 8.19205 19.6667 12.3334 19.6667C16.4747 19.6667 18.5341 16.3147 18.6194 16.1714C18.7014 16.0347 18.6754 15.8594 18.5567 15.7527Z" fill="#664500"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">23</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.667 24C19.2944 24 24.667 18.6274 24.667 12C24.667 5.37258 19.2944 0 12.667 0C6.03958 0 0.666992 5.37258 0.666992 12C0.666992 18.6274 6.03958 24 12.667 24Z" fill="#FFCC4D"/>
                                    <path d="M7.67613 15.748C7.70613 15.8673 8.45479 18.6673 12.6661 18.6673C16.8781 18.6673 17.6261 15.8673 17.6561 15.748C17.6928 15.6033 17.6275 15.4533 17.4981 15.3787C17.3681 15.3047 17.2055 15.3267 17.0981 15.43C17.0855 15.4427 15.7955 16.6673 12.6661 16.6673C9.53679 16.6673 8.24613 15.4427 8.23413 15.4307C8.17013 15.3673 8.08479 15.334 7.99946 15.334C7.94346 15.334 7.88679 15.348 7.83546 15.3767C7.70479 15.4513 7.63946 15.6027 7.67613 15.748Z" fill="#664500"/>
                                    <path d="M8.66667 11.3337C9.58714 11.3337 10.3333 10.289 10.3333 9.00033C10.3333 7.71166 9.58714 6.66699 8.66667 6.66699C7.74619 6.66699 7 7.71166 7 9.00033C7 10.289 7.74619 11.3337 8.66667 11.3337Z" fill="#664500"/>
                                    <path d="M16.6667 11.3337C17.5871 11.3337 18.3333 10.289 18.3333 9.00033C18.3333 7.71166 17.5871 6.66699 16.6667 6.66699C15.7462 6.66699 15 7.71166 15 9.00033C15 10.289 15.7462 11.3337 16.6667 11.3337Z" fill="#664500"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">18</span>
                            </button>
                            <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <svg aria-hidden="true" className="h-6 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.24467 6.07733C3.87207 5.63882 4.81784 5.72291 5.38116 6.18812L4.73508 5.24903C4.21514 4.5075 4.40135 3.70523 5.14355 3.18462C5.88575 2.66601 7.98887 4.06031 7.98887 4.06031C7.46426 3.31143 7.56238 2.36233 8.31125 1.83705C9.06012 1.31377 10.0933 1.49465 10.6179 2.24486L17.5727 12.0697L16.6864 20.663L9.28906 17.9652L2.83686 8.3987C2.30758 7.64516 2.49046 6.60594 3.24467 6.07733Z" fill="#EF9645"/>
                                    <path d="M1.79857 11.5433C1.79857 11.5433 1.04302 10.442 2.14497 9.68715C3.24559 8.93226 4.00047 10.0329 4.00047 10.0329L7.50523 15.1442C7.62603 14.9426 7.75819 14.7437 7.90569 14.5475L3.04135 7.45454C3.04135 7.45454 2.28647 6.35392 3.38775 5.59904C4.48837 4.84416 5.24325 5.94478 5.24325 5.94478L9.81859 12.6172C9.98879 12.4784 10.163 12.3389 10.3425 12.2021L5.03835 4.46572C5.03835 4.46572 4.28347 3.3651 5.38475 2.61022C6.48537 1.85534 7.24025 2.95596 7.24025 2.95596L12.5444 10.691C12.7393 10.5715 12.9322 10.4681 13.1258 10.3586L8.168 3.12883C8.168 3.12883 7.41312 2.02821 8.51373 1.27333C9.61435 0.518448 10.3692 1.61907 10.3692 1.61907L15.6113 9.26398L16.4083 10.4267C13.1058 12.692 12.7914 16.9536 14.6783 19.7055C15.0554 20.2561 15.606 19.879 15.606 19.879C13.3414 16.5758 14.0328 12.8642 17.336 10.5995L16.3622 5.72586C16.3622 5.72586 15.9985 4.44169 17.282 4.07727C18.5661 3.71351 18.9306 4.99767 18.9306 4.99767L20.0552 8.33757C20.5011 9.66178 20.9756 10.9813 21.6037 12.2294C23.3771 15.7536 22.3178 20.1333 18.9739 22.4273C15.3263 24.9283 10.3399 23.9985 7.83828 20.3516L1.79857 11.5433Z" fill="#FFDC5D"/>
                                    <path d="M8.00913 21.3583C5.33934 21.3583 2.64153 18.6605 2.64153 15.9907C2.64153 15.6216 2.37122 15.3232 2.00212 15.3232C1.63302 15.3232 1.30664 15.6216 1.30664 15.9907C1.30664 19.9954 4.00445 22.6932 8.00913 22.6932C8.37822 22.6932 8.67657 22.3668 8.67657 21.9977C8.67657 21.6286 8.37822 21.3583 8.00913 21.3583Z" fill="#5DADEC"/>
                                    <path d="M4.67212 22.6649C2.66978 22.6649 1.33489 21.33 1.33489 19.3277C1.33489 18.9586 1.03654 18.6602 0.667445 18.6602C0.298348 18.6602 0 18.9586 0 19.3277C0 21.9974 2.00234 23.9998 4.67212 23.9998C5.04121 23.9998 5.33956 23.7014 5.33956 23.3323C5.33956 22.9632 5.04121 22.6649 4.67212 22.6649ZM16.0187 1.30664C15.6503 1.30664 15.3512 1.60566 15.3512 1.97409C15.3512 2.34252 15.6503 2.64153 16.0187 2.64153C18.6885 2.64153 21.3583 5.03699 21.3583 7.98109C21.3583 8.34952 21.6573 8.64854 22.0257 8.64854C22.3941 8.64854 22.6931 8.34952 22.6931 7.98109C22.6931 4.3008 20.0234 1.30664 16.0187 1.30664Z" fill="#5DADEC"/>
                                    <path d="M19.3559 0C18.9875 0 18.6885 0.270983 18.6885 0.639413C18.6885 1.00784 18.9875 1.33489 19.3559 1.33489C21.3583 1.33489 22.6651 2.81996 22.6651 4.64408C22.6651 5.01251 22.9915 5.31153 23.3606 5.31153C23.7297 5.31153 24 5.01251 24 4.64408C24 2.0831 22.0257 0 19.3559 0Z" fill="#5DADEC"/>
                                </svg>
                                <span className="text-gray-500 text-sm font-medium dark:text-gray-400">14</span>
                            </button>
                        </div>
                    </aside>
                    <aside aria-labelledby="categories-label">
                        <h3 id="categories-label" className="sr-only">Categories</h3>
                        <nav className="p-6 mb-6 font-medium text-gray-500 rounded-lg border border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <ul className="mb-6 space-y-4">
                                <li>
                                    <a href="#" className="flex items-center text-primary-600 dark:text-primary-500"><svg
                                            aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                            </path>
                                        </svg> Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg> Reading list</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                clip-rule="evenodd"></path>
                                        </svg> Listings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                                clip-rule="evenodd"></path>
                                        </svg> Podcasts</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                                            </path>
                                        </svg> Videos</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                                clip-rule="evenodd"></path>
                                        </svg> Tags</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                clip-rule="evenodd"></path>
                                        </svg> FAQ</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clip-rule="evenodd"></path>
                                        </svg> Sponsors</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clip-rule="evenodd"></path>
                                        </svg> About</a>
                                </li>
                            </ul>
                            <h4 className="mb-4 text-gray-900 dark:text-white">Others</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z">
                                            </path>
                                            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                                        </svg> Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                                clip-rule="evenodd"></path>
                                        </svg> Terms of use</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center hover:text-primary-600 dark:hover-text-primary-500"><svg
                                            className="mr-2 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg> Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <aside>   
                        <div className="flex justify-center items-center mb-3 w-full h-32 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <p className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400">Students and Teachers, save up to 60% on Flowbite Creative Cloud.</p>
                        <p className="text-xs font-light text-gray-400 uppercase dark:text-gray-500">Ads placeholder</p>
                    </aside>
                </div>
            </div>
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Prototyping
                        from A to Z: best practices for successful prototypes</h1>
                    <div className="text-base">
                        <address className="inline">By <a rel="author"
                                className="text-gray-900 no-underline dark:text-white hover:underline" href="#">Jese
                                Leos</a></address> in <a href="#"
                            className="text-gray-900 no-underline dark:text-white hover:underline">Design</a>
                        on <time pubdate className="uppercase" datetime="2022-02-08" title="February 8th, 2022">Feb. 8,
                            2022</time>
                    </div>
                </header>
                <div className="flex justify-between items-center">
                    <aside aria-label="Share social media">
                        <a href="#"
                            className="inline-flex items-center py-2 px-3 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                className="mr-2 w-4 h-4" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg> Share</a>
                        <a href="#"
                            className="inline-flex items-center py-2 px-3 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                className="mr-2 w-4 h-4" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg> Tweet</a>
                        <a href="#"
                            className="inline-flex items-center py-2 px-3 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                className="mr-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                    clip-rule="evenodd"></path>
                            </svg> Copy link</a>
                    </aside>
                    <button data-tooltip-target="tooltip-save" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-gray-400 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                        <svg className="w-6 h-6"aria-hidden="true"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    </button>
                    <div id="tooltip-save" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Save this article
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <p className="lead">Flowbite is an open-source library of UI components built with the utility-first
                    classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                    datepickers.</p>
                <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                    you can think things through before committing to an actual design project.</p>
                <p>But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
                        Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
                    bars, cards, form elements, and more which are conveniently built with the utility classes from
                    Tailwind CSS.</p>
                <figure><Image src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
                    <figcaption>Digital art by Anonymous</figcaption>
                </figure>
                <h2>Getting started with Flowbite</h2>
                <p>First of all you need to understand how Flowbite works. This library is not another framework.
                    Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                    documentation.</p>
                <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                    and datepickers which you can optionally include into your project via CDN or NPM.</p>
                <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                        guide</a> to explore the elements by including the CDN files into your project. But if you want
                    to build a project with Flowbite I recommend you to follow the build tools steps so that you can
                    purge and minify the generated CSS.</p>
                <p>You&apos;ll also receive a lot of useful application UI, Publisher UI, and e-commerce pages that can help
                    you get started with your projects even faster. You can check out this <a
                        href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
                    the differences between the open-source and pro version of Flowbite.</p>
                <h2>When does design come in handy?</h2>
                <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                    will come in handy:</p>
                <ol>
                    <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                        follow your intended user journey and buy something from the site you&apos;ve designed? By running a
                        usability test, you&apos;ll be able to see how users will interact with your design once it&apos;s live;
                    </li>
                    <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                        properly? Pass your prototype to your data protection team and they can test it for real;</li>
                    <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                        providing your client with a hands-on experience;</li>
                    <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                        design elements, designers and developers can understand each other — and the project — better.
                    </li>
                </ol>
                <h3>Laying the groundwork for best design</h3>
                <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                    you can think things through before committing to an actual design project.</p>
                <p>Let&apos;s start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                <h3>Understanding typography</h3>
                <h4>Type properties</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h4>Baseline</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h4>Measurement from the baseline</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h3>Type classification</h3>
                <h4>Serif</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                    Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                    following:</p>
                <h4>Old-Style serifs</h4>
                <ul>
                    <li>Low contrast between thick and thin strokes</li>
                    <li>Diagonal stress in the strokes</li>
                    <li>Slanted serifs on lower-case ascenders</li>
                </ul><Image src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt=""/>
                <ol>
                    <li>Low contrast between thick and thin strokes</li>
                    <li>Diagonal stress in the strokes</li>
                    <li>Slanted serifs on lower-case ascenders</li>
                </ol>
                <h3>Laying the best for successful prototyping</h3>
                <p>A serif is a small shape or projection that appears at the beginning:</p>
                <blockquote>
                    <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                        login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
                </blockquote>
                <h4>Code example</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                    Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
                    following:</p>
                <pre><code className="language-html"><dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white">
    <div className="flex flex-col justify-center items-center">
        <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
        <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">developers</dd>
    </div>
    <div className="flex flex-col justify-center items-center">
        <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
        <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">contributors</dd>
    </div>
    <div className="flex flex-col justify-center items-center">
        <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
        <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">organizations</dd>
    </div>
    </dl>
    </code></pre>
                <h4>Table example</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Date & Time</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United States</td>
                            <td>April 21, 2021</td>
                            <td><strong>$2,300</strong></td>
                        </tr>
                        <tr>
                            <td>Canada</td>
                            <td>May 31, 2021</td>
                            <td><strong>$300</strong></td>
                        </tr>
                        <tr>
                            <td>United Kingdom</td>
                            <td>June 3, 2021</td>
                            <td><strong>$2,500</strong></td>
                        </tr>
                        <tr>
                            <td>Australia</td>
                            <td>June 23, 2021</td>
                            <td><strong>$3,543</strong></td>
                        </tr>
                        <tr>
                            <td>Germany</td>
                            <td>July 6, 2021</td>
                            <td><strong>$99</strong></td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>August 23, 2021</td>
                            <td><strong>$2,540</strong></td>
                        </tr>
                    </tbody>
                </table>
                <h3>Best practices for setting up your prototype</h3>
                <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
                    the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                    prototype — like a wireframe with placeholder images and some basic text — would be more than
                    enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
                    on-brand colors, fonts and imagery — could help get more pointed results.</p>
                <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
                    would when interacting with your product. While you can fine-tune this during beta testing,
                    considering your user’s needs and habits early on will save you time by setting you on the right
                    path.</p>
                <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
                    user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
                    be important to your user, like a Buy now button or an image gallery, and list each element by order
                    of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
                    of your design.</p>
                <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
                </p>
                <section className="not-format">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
                        <div>
                            <button type="button"
                                className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Subscribe</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-3 shrink-0 hidden sm:block">
                            <Image className="w-9 h-9 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                    alt="Michael Burry"/>
                        </div>
                        <form className="mb-6 w-full">
                            <div
                                className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label for="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows="4"
                                        className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                        placeholder="Write a comment..." required></textarea>
                                </div>
                                <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                        <div className="flex items-center space-x-1 sm:pr-4">
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Attach file</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Embed map</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Upload image</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Format code</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Add emoji</span>
                                            </button>
                                        </div>
                                        <div className="flex-wrap items-center space-x-1 sm:pl-4 hidden sm:flex">
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Add list</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>       
                                                <span className="sr-only">Settings</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Timeline</span>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Download</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Post comment
                            </button>
                        </form>
                    </div>
                    <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium dark:bg-gray-700">
                                    <button type="button" className="text-gray-500 dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">+</button>
                                    <span className="text-gray-900 font-m py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">14</span>
                                    <button type="button" className="text-gray-500  dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">-</button>
                                </div>
                            </div>
                            <div className="w-full">
                                <footer className="flex justify-between items-center mb-2 w-full">
                                    <a href="#" className="flex items-center">
                                        <Image className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                alt="Bonnie Green"/>
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 dark:text-white">
                                            <span>Bonnie Green</span>
                                            <time className="text-sm text-gray-600 dark:text-gray-400 md:ml-2" pubdate datetime="2022-03-15"
                                                title="March 15th, 2022">Mar. 15, 2022</time>
                                        </p>
                                    </a>
                                    <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment1"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="ml-6 lg:ml-12 p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium dark:bg-gray-700">
                                    <button type="button" className="text-gray-500 dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">+</button>
                                    <span className="text-gray-900 font-m py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">3</span>
                                    <button type="button" className="text-gray-500  dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">-</button>
                                </div>
                            </div>
                            <div className="w-full">
                                <footer className="flex justify-between items-center mb-2 w-full">
                                    <a href="#" className="flex items-center">
                                        <Image className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                alt="Jese Leos"/>
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 dark:text-white">
                                            <span>Jese Leos</span>
                                            <time className="text-sm text-gray-600 dark:text-gray-400 md:ml-2" pubdate datetime="2022-02-12"
                                                title="February 12th, 2022">Feb. 12, 2022</time>
                                        </p>
                                    </a>
                                    <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment2"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium dark:bg-gray-700">
                                    <button type="button" className="text-gray-500 dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">+</button>
                                    <span className="text-gray-900 font-m py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">12</span>
                                    <button type="button" className="text-gray-500  dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">-</button>
                                </div>
                            </div>
                            <div className="w-full">
                                <footer className="flex justify-between items-center mb-2 w-full">
                                    <a href="#" className="flex items-center">
                                        <Image className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                alt="Danny Hart"/>
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 dark:text-white">
                                            <span>Danny Hart</span>
                                            <time className="text-sm text-gray-600 dark:text-gray-400 md:ml-2" pubdate datetime="2022-02-08"
                                                title="February 8th, 2022">Feb. 8, 2022</time>
                                        </p>
                                    </a>
                                    <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment3"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                                    instruments for the UX designers. The knowledge of the design tools are as important as the
                                    creation of the design strategy.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium dark:bg-gray-700">
                                    <button type="button" className="text-gray-500 dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">+</button>
                                    <span className="text-gray-900 font-m py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">8</span>
                                    <button type="button" className="text-gray-500  dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">-</button>
                                </div>
                            </div>
                            <div className="w-full">
                                <footer className="flex justify-between items-center mb-2 w-full">
                                    <a href="#" className="flex items-center">
                                        <Image className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                alt="Bonnie Green"/>
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 dark:text-white">
                                            <span>Bonnie Green</span>
                                            <time className="text-sm text-gray-600 dark:text-gray-400 md:ml-2" pubdate datetime="2022-03-15"
                                                title="March 15th, 2022">Mar. 15, 2022</time>
                                        </p>
                                    </a>
                                    <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment4"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="p-4 lg:p-6 mb-6 text-base bg-white border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                        <div className="flex">
                            <div className="mr-4">
                                <div className="rounded-lg bg-gray-100 w-9 flex flex-col items-center justify-center font-medium dark:bg-gray-700">
                                    <button type="button" className="text-gray-500 dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-t-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">+</button>
                                    <span className="text-gray-900 font-m py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">32</span>
                                    <button type="button" className="text-gray-500  dark:text-gray-400 py-1 dark:hover:bg-gray-600 rounded-b-lg hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-600">-</button>
                                </div>
                            </div>
                            <div className="w-full">
                                <footer className="flex justify-between items-center mb-2 w-full">
                                    <a href="#" className="flex items-center">
                                        <Image className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                alt="Helene Engels"/>
                                        <p className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-gray-900 dark:text-white">
                                            <span>Helene Engels</span>
                                            <time className="text-sm text-gray-600 dark:text-gray-400 md:ml-2" pubdate datetime="2022-06-23"
                                                title="June 23rd, 2022">Jun. 23, 2022</time>
                                        </p>
                                    </a>
                                    <button id="dropdownComment5Button" data-dropdown-toggle="dropdownComment5"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment5"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                        <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </article>
            <aside className="hidden lg:block lg:w-72" aria-labelledby="sidebar-label">
                <div className="sticky top-6">
                    <h3 id="sidebar-label" className="sr-only">Sidebar</h3>
                    <div className="p-6 mb-6 text-gray-500 rounded-lg border border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        <a href="#" className="flex items-center mb-4">
                            <div className="mr-3 shrink-0">
                                <Image className="mt-1 w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                    alt="Jese Leos"/>
                            </div>
                            <div className="mr-3">
                                <span className="block font-medium text-gray-900 dark:text-white">Jese Leos</span>
                                <span className="text-sm">34k followers</span>
                            </div>
                        </a>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Hey! I&apos;m Jese Leos. I&apos;m a career-changer. Bootcamp grad & Dev.</p>
                        <dl className="mb-5">
                            <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Location</dt>
                            <dd className="mb-3 text-sm text-gray-500 dark:text-gray-400">California, United States</dd>
                            <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Joined</dt>
                            <dd className="text-sm text-gray-500 dark:text-gray-400">September 20, 2018</dd>
                        </dl>
                        <button type="button" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-full">Follow</button>
                    </div>
                    <div className="p-6 mb-6 font-medium text-gray-500 rounded-lg border border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        <form className="mb-6">
                            <label for="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                    className="block py-2.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search..." required/>
                            </div>
                        </form>
                        <h4 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">Recommended topics</h4>
                        <div className="flex flex-wrap">
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-3">Technology</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-3">Money</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-3">Art</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-3">Productivity</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mb-3">Psychology</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">Design</a>
                            <a href="#"
                                className="bg-primary-100 text-primary-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">Mindfulness</a>
                        </div>
                    </div>
                    <div
                        className="p-6 font-medium text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <h4 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">Who to follow</h4>
                        <ul className="space-y-4 font-light text-gray-500 dark:text-gray-400">
                            <li className="flex justify-between items-start">
                                <div className="mr-3 shrink-0">
                                    <Image className="mt-1 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Bonnie Green"/>
                                </div>
                                <div className="mr-3">
                                    <span className="block font-medium text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span className="text-sm">Web developer at Facebook</span>
                                </div>
                                <div>
                                    <button type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
                                </div>
                            </li>
                            <li className="flex justify-between items-start">
                                <div className="mr-3 shrink-0">
                                    <Image className="mt-1 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                                </div>
                                <div className="mr-3">
                                    <span className="block font-medium text-gray-900 dark:text-white">Jese Leos</span>
                                    <span className="text-sm">Software enginner at Alphabet Inc.</span>
                                </div>
                                <div>
                                    <button type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
                                </div>
                            </li>
                            <li className="flex justify-between items-start">
                                <div className="mr-3 shrink-0">
                                    <Image className="mt-1 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="Paul Livingston"/>
                                </div>
                                <div className="mr-3">
                                    <span className="block font-medium text-gray-900 dark:text-white">Paul Livingston</span>
                                    <span className="text-sm">Figma designer at Adobe Inc.</span>
                                </div>
                                <div>
                                    <button type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    </main>
    
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                <article className="max-w-xs">
                    <a href="#">
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1"/>
                    </a>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Our first office</a>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                        Read in 2 minutes
                    </a>
                </article>
                <article className="max-w-xs">
                    <a href="#">
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"/>
                    </a>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Enterprise design tips</a>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                        Read in 12 minutes
                    </a>
                </article>
                <article className="max-w-xs">
                    <a href="#">
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"/>
                    </a>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">We partnered up with Google</a>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                        Read in 8 minutes
                    </a>
                </article>
                <article className="max-w-xs">
                    <a href="#">
                        <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"/>
                    </a>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href="#">Our first project with React</a>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                        Read in 4 minutes
                    </a>
                </article>
            </div>
        </div>
    </aside>
    
    <section className="bg-white dark:bg-gray-900">
        <div className="p-4 py-12 mx-auto max-w-screen-xl text-center lg:py-24">
            <h2 className="mx-auto mb-6 max-w-2xl text-2xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">Join a growing community of millions of developers and designers!</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500 lg:text-xl dark:text-gray-400">Millions of tech blogs publish on Flowbite daily. </p>
            <a href="#" className="py-3 px-5 w-full text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Create an account</a>
        </div>
    </section>
    
    <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">iOS</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Android</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Windows</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">MacOS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="text-center">
                <a href="#" className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    <svg className="mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z" fill="url(#paint0_linear_11430_22515)"/><path d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z" fill="url(#paint1_linear_11430_22515)"/><path d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z" fill="url(#paint2_linear_11430_22515)"/><path d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z" fill="url(#paint3_linear_11430_22515)"/><path d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z" fill="url(#paint4_linear_11430_22515)"/><path d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z" fill="url(#paint5_linear_11430_22515)"/><path d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z" fill="url(#paint6_linear_11430_22515)"/><path d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z" fill="url(#paint7_linear_11430_22515)"/><path d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z" fill="url(#paint8_linear_11430_22515)"/>
                        <defs>
                        <linearGradient id="paint0_linear_11430_22515" x1="20.8102" y1="23.9532" x2="23.9577" y2="12.9901" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                        <linearGradient id="paint1_linear_11430_22515" x1="28.0593" y1="10.5837" x2="19.7797" y2="2.33321" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                        <linearGradient id="paint2_linear_11430_22515" x1="16.9145" y1="5.2045" x2="4.42432" y2="5.99375" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                        <linearGradient id="paint3_linear_11430_22515" x1="16.0698" y1="28.846" x2="27.2866" y2="25.8192" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                        <linearGradient id="paint4_linear_11430_22515" x1="8.01881" y1="15.8661" x2="15.9825" y2="24.1181" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                        <linearGradient id="paint5_linear_11430_22515" x1="26.2004" y1="21.8189" x2="31.7569" y2="10.6178" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                        <linearGradient id="paint6_linear_11430_22515" x1="6.11387" y1="9.31427" x2="3.14054" y2="20.4898" gradientUnits="userSpaceOnUse"><stop stop-color="#1C64F2"/><stop offset="1" stop-color="#0092FF"/></linearGradient>
                        <linearGradient id="paint7_linear_11430_22515" x1="21.2932" y1="8.78271" x2="10.4278" y2="11.488" gradientUnits="userSpaceOnUse"><stop stop-color="#1724C9"/><stop offset="1" stop-color="#1C64F2"/></linearGradient>
                        <linearGradient id="paint8_linear_11430_22515" x1="7.15667" y1="21.5399" x2="14.0824" y2="31.9579" gradientUnits="userSpaceOnUse"><stop stop-color="#0092FF"/><stop offset="1" stop-color="#45B2FF"/></linearGradient>
                        </defs>
                    </svg>
                    Flowbite    
                </a>
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex justify-center mt-5 space-x-5">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}
