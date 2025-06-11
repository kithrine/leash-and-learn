# CODE TO PRESERVE FOR LATER... OR JUST IN CASE

## Main Logo on the Homepage

```
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="text-center">
  <div>
    <h2 className=" justify-self-center mr-24 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200">
      Welcome to{" "}
    </h2>
  </div>
  <div className="mx-auto max-w-screen-xl text-center">
    <div className="flex justify-center items-center text-7xl font-semibold text-black dark:text-white space-x-3 rtl:space-x-reverse">
      <div className="absolute mt-36">
        <svg
          className="homepage-paw animate-pulse absolute mt-9 ml-"
          xmlns="http://www.w3.org/2000/svg"
          height="95"
          width="95"
          viewBox="0 0 512 512">
          <path
            fill="#725f4f"
            d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
          />
        </svg>
        <div className="flex flex-col">
          <span className="self-center text-9xl font-semibold whitespace-nowrap dark:text-white">
            <span className="leash mr-4">Leash </span>
            <span className="and text-5xl relative text-white mx-1 mr-5 -mt-4">
              &
            </span>{" "}
            <span className="learn pr-12"> learn</span>
          </span>
          <span className="dog-training text-center text-5xl font-bold mr-8 -mt-4 text-gray-800 dark:text-gray-400">
            DOG TRAINING
          </span>
        </div>
      </div>
    </div>
    <SplitText
      text="Where every dog's full potential is unleashed™"
      className="mr-12 mt-40 pb-4 text-3xl font-thin text-center tracking-widest font-stretch-extra-expanded text-black dark:text-white"
      delay={50}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
    />
  </div>
</motion.div>
```

## Importing Image
```
{
  new URL(
    "../assets/images/AudreyRadulovich.jpg",
    import.meta.url
  ).href
}
```

## Transition Colors
```
 transition-colors ease-in-out duration-300
```