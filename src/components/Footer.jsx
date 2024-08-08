import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer class="pt-8 dark:bg-gray-900 border-t-4 mt-3">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a
              href="https://flowbite.com/"
              class="flex items-center"
            >
              <Link
                to={"/"}
                className="uppercase text-blue-600 font-extrabold text-2xl self-center whitespace-nowrap"
              >
                Genre<span className="text-red-600 text-3xl">fy</span>
              </Link>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Social Icon */}
            <div>
              <h2 class="mb-6 text-sm font-semibold text-neutral-100 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-neutral-400 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/obere4u"
                    class="hover:underline hover:text-neutral-200"
                  >
                    Github
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://x.com/obere4u"
                    class="hover:underline hover:text-neutral-200"
                  >
                    X (former Twitter)
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://linkedin.com/in/nwosa-tochukwu"
                    class="hover:underline hover:text-neutral-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-neutral-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-neutral-400  dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="#"
                    class="hover:underline hover:text-neutral-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:underline hover:text-neutral-200"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-neutral-400 sm:text-center dark:text-gray-400">
            © 2023 - {date}{" "}
            <a
              href="https://linkedin.com/obere4u"
              class="hover:underline hover:text-neutral-200"
            >
              Greenfy™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://linkedin.com/in/nwosa-tochukwu"
              class="text-neutral-400 hover:text-neutral-200 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  clipRule="evenodd"
                />
              </svg>

              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/obere4u"
              class="text-neutral-400 hover:text-neutral-200 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 1200 1227"
              >
                <path
                  fillRule="evenodd"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                  clipRule="evenodd"
                />
              </svg>
              <span class="sr-only">X (Former Twitter)</span>
            </a>

            <a
              href="https://github.com/obere4u"
              class="text-neutral-400 hover:text-neutral-200 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              class="text-neutral-400 hover:text-neutral-200 dark:hover:text-white ms-5"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M87.3749 147.217C87.3749 157.436 81.0804 172.918 61.1561 172.886H36V83H61.6874C80.9015 83 87.3641 98.4608 87.3695 108.685L87.3749 147.217ZM62.582 99.8189C64.6856 99.8189 66.7946 100.607 68.8982 102.182C70.9963 103.757 72.0535 106.126 72.0589 109.277V147.114C72.0589 150.27 71.0071 152.633 68.9036 154.209C66.8 155.784 64.691 156.572 62.5874 156.572H53.1268V99.8189H62.582Z"
                  fill="evenodd"
                />
                <path
                  d="M141.959 99.0529H113.073V119.924H130.731V135.988H113.073V156.854H141.965V172.918H108.253C102.203 173.076 97.1717 168.284 97.0199 162.222V94.2561C96.8735 88.1989 101.661 83.1684 107.706 83.0163H141.965L141.959 99.0529Z"
                  fill="evenodd"
                />
                <path
                  d="M198.149 161.684C190.992 178.389 178.17 175.064 172.429 161.684L151.539 83.0217H169.197L185.305 144.8L201.336 83.0217H219L198.149 161.684Z"
                  fillrule="evenodd"
                />
              </svg>

              <span class="sr-only">Dev.to</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer