import Link from "next/link"
import ButtonBlog from "./comp/buttonBlog"


const Blog = () => {
	
	
	
	
  return (
    <>
      <div>
   
        <section>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">
            read my blog
          </h1>
		  <ButtonBlog linkHref="https://arqn09.blogspot.com/2023/07/memahami.html"  kata="Memahami" />
		  <ButtonBlog linkHref="https://arqn09.blogspot.com/2023/05/topeng.html3"  kata="Topeng Mask" />
		  <ButtonBlog linkHref="https://arqn09.blogspot.com/2022/12/giliran.html"  kata="Giliran" />
		  <ButtonBlog linkHref="https://arqn09.blogspot.com/2022/12/suaramu.html"  kata="Suaramu" />
		  <ButtonBlog linkHref="https://arqn09.blogspot.com/2022/12/lagi-dengan-suaramu.html"  kata="Lagi Dengan Suaramu" />
          
          
         
          
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/11/masa-lalu.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
				Masa lalu
              </p>
              <p className="text-neutral-600 ">
                66,758 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/11/merenung.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Merenung
              </p>
              <p className="text-neutral-600 ">
                25,036 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="https://arqn09.blogspot.com/2022/11/tidak-ada-yang-sama.html">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Tidak Ada Yang Sama
              </p>
              <p className="text-neutral-600 ">
                69,685 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/11/sudah-ada.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Sudah Ada
              </p>
              <p className="text-neutral-600 ">
                27,453 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="https://arqn09.blogspot.com/2022/11/ego.html">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Ego
              </p>
              <p className="text-neutral-600 ">
                23,525 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/11/entah-sampai-kapan.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Peran
              </p>
              <p className="text-neutral-600 ">
                5,328 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2023/07/aqal-dan-kebiasaan.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Aqal Dan Kebiasaan
              </p>
              <p className="text-neutral-600 ">
                37,676 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="https://arqn09.blogspot.com/2022/07/kendali-masalah.html">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Kendali Masalah
              </p>
              <p className="text-neutral-600 ">
                40,784 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/01/kendali-diri.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Kendali Diri
              </p>
              <p className="text-neutral-600 ">
                10,456 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2022/11/ingatan-itu-yang-mengembalikan.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Ingatan Itu Yang Mengembalikan
              </p>
              <p className="text-neutral-600 ">
                29,670 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="https://arqn09.blogspot.com/2023/03/suaramu.html"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Kumandangkanlah
              </p>
              <p className="text-neutral-600 ">
                4,702 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="https://arqn09.blogspot.com/2023/04/kumandangkanlah-lagi.html">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Kumandangkanlah Lagi
              </p>
              <p className="text-neutral-600 ">
                299,680 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/mysql-planetscale"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                From Firebase/Redis to MySQL with PlanetScale
              </p>
              <p className="text-neutral-600 ">
                15,876 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="/blog/career">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                How I Became Link Software Engineer (From Designer to Developer)
              </p>
              <p className="text-neutral-600 ">
                8,019 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/serverless-redis-nextjs"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Using Serverless Redis with Next.js
              </p>
              <p className="text-neutral-600 ">
                19,162 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/react-state-management"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Past, Present, and Future of React State Management
              </p>
              <p className="text-neutral-600 ">
                157,552 views
              </p>
            </div>
          </Link>
          <Link className="flex flex-col space-y-1 mb-4" href="/blog/fonts">
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Web Fonts in 2021
              </p>
              <p className="text-neutral-600 ">
                20,078 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/css-with-react"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                How Should I Style My React Application?
              </p>
              <p className="text-neutral-600 ">
                16,766 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/spotify-api-nextjs"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Using the Spotify API with Next.js
              </p>
              <p className="text-neutral-600 ">
                20,988 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/nextjs-sitemap-robots"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Create Link Dynamic Sitemap with Next.js
              </p>
              <p className="text-neutral-600 ">
                58,859 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/mailchimp-next-js"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Create A Newsletter with Next.js API Routes and Mailchimp
              </p>
              <p className="text-neutral-600 ">
                21,316 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/real-time-post-views"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Real-Time Blog Post Views With Next.js and Firebase
              </p>
              <p className="text-neutral-600 ">
                17,596 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/style-guides-component-libraries-design-systems"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Everything I Know About Style Guides, Design Systems, and
                Component Libraries
              </p>
              <p className="text-neutral-600 ">
                191,491 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/nextjs-firebase-serverless"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Using Firebase with Next.js
              </p>
              <p className="text-neutral-600 ">
                37,274 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/how-to-print-in-react-using-iframes"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                How To Print in React Using Iframes
              </p>
              <p className="text-neutral-600 ">
                25,880 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/turborepo-design-system-monorepo"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Building Link Design System Monorepo with Turborepo
              </p>
              <p className="text-neutral-600 ">
                93,728 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/technical-recruiting-is-broken"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Technical Recruiting is Broken
              </p>
              <p className="text-neutral-600 ">
                17,179 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/things-ive-learned-building-nextjs-apps"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Things I've Learned Building Next.js Apps
              </p>
              <p className="text-neutral-600 ">
                34,249 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/how-stripe-designs-beautiful-websites"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                How Stripe Designs Beautiful Websites
              </p>
              <p className="text-neutral-600 ">
                96,285 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/loading-placeholder-with-sass"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Creating Link Loading Placeholder with Sass
              </p>
              <p className="text-neutral-600 ">
                17,820 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/beginners-guide-to-the-programming-portfolio"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Programming Portfolios
              </p>
              <p className="text-neutral-600 ">
                13,460 views
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href="/blog/space-invaders-with-python"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                Creating Link Space Invaders Clone with Python
              </p>
              <p className="text-neutral-600 ">
                21,555 views
              </p>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Blog;
