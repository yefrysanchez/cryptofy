import React from "react";

const Signin = ({close}) => {
  return (
    <div className="fixed z-50 bg-black/70 top-0 left-0 bottom-0 right-0 text-indigo-700">
      <div className="bg-white relative max-w-lg mt-10 mx-auto flex flex-col items-center p-4 rounded-lg">
        <div>
          <h1 className="font-bold text-xl bg-indigo-600 text-white w-fit py-2 px-4 rounded-md">
            Cryptofy
          </h1>
        </div>
        <h2 className="mt-4 font-bold text-4xl mb-6">Welcome to Cryptofy</h2>
        <form className="flex flex-col">
          <input
            placeholder="Email"
            className="border-2 rounded-lg p-1 mb-2"
            type="email"
            name="email"
          />
          <input
            placeholder="Password"
            className="border-2 rounded-lg p-1 mb-8"
            type="password"
            name="password"
          />
          <input
            className="bg-indigo-600 text-white rounded-lg p-2 cursor-pointer"
            type="button"
            value="Sign in"
          />
        </form>
        <h3 className="my-8 font-bold">OR</h3>
        <div className="bg-indigo-600 mb-2 text-white cursor-pointer flex py-2 px-4 rounded-lg gap-2 items-center">
          <div className="w-8 h-8 bg-white p-1 rounded-lg">
            <img
              className="h-full w-full object-cover"
              src="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg?w=360"
              alt=""
            />
          </div>
          <p className="font-bold ">Continue with Google</p>
        </div>
        <div onClick={() => close(false)}  className="bg-indigo-600 text-white cursor-pointer flex py-2 px-4 rounded-lg gap-2 items-center">
          <div className="w-8 h-8 bg-white p-1 rounded-lg">
            <img
              className="h-full w-full object-cover"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAB9fX3t7e329vbq6ur6+vrPz8/X19djY2Pg4ODx8fGysrJsbGzMzMzFxcW7u7vV1dWrq6tycnJeXl6UlJSlpaUvLy8qKipAQEDf3980NDRYWFgcHBzAwMCNjY0RERGYmJiFhYU+Pj54eHhISEgaGhqenp4iIiJPT08TExNHR0fVD2F4AAAIwUlEQVR4nO2d13riMBBGl2II2HSCCb0tJXn/99sQz8gyJYD1yx7vp3OTixgxwtI0jaQ/fxwOh8PhcDgcDofDIQm/GbyXZ9t5qVT6DE+D5ahXqeUtE45qezMrXfMxCLy8RYOwaMxvdI/4GlXyls+Q5vJ+74hTJ28hDeg1HvbvTNgv6JScPNe/M9Mgb2FTUCvf6sp+PA2PN/s4yVvgV+lejsTWqNNU/63Ug/LHxRObQg3Vaish/LB/6w15i11Cy47rmcuZmt5eE/x4uG8QqouEoTxkKKMRfX1+PbIF3kB7ulGMkbqJJf5YPPG83sfQty6eOdoU7D/5kV6sdcbNx4/nTGwEZy94nWv1qb30Lg6VqKOXPteMraTsLqoptX978ZNV9fL3kuei8rM/UoQM6sNbuRo1YBlPqWQ8KKOBFgzFROmYlA0oQ/oOlQtGbcwdTD3K1FuU6cDtSLppNX0b7C3sJU7FDv/+RnkJtjYDlFg41Bg1G2C1kJppg+TCwbp+bdgOq6spRCogHgn2ZdwSa5tnndqsYH8b4HL9pabMW0LSBBoybst0vGNpIX93ymGtDKwOHJ6FmKSgT629Fp3YZYnVf+/i1CnbQlRe119Js4nkzoxhrhbNxB2qPWNaaOXH6lSKd1rF2UKGUlNdXItG0CD9C2ySIsUWsEkTNng3iw0GsEkTSPNBE0inqM0ess3U0DQcQxtdS3K/F5EwS2ijb5Im4sGG3qOJuIU2mhZKPIArR6KJuBJRqhFaiQQoey5h8bsWLeSewM0e5Lim5GGhk2MdOREUab0NuNmeDQ2djnokCjoRTzm3MrjZNLTt2GbPzuBPA/UQXdXkyTH5CzuBTmUlpocdO+9QUA///3lIuhRdz0RmVkKqxpLhsmRm0zCx82PT0JCQ2qfkJrq6ILCjolMRpYOn4MwfJX9eLcuxwlckC7jOhwqIRBRIUYIamzSqTX8axaXRTQhsmAsyh+ioMx2k14fQRgM5wdM3kTDY7C0V5wjZbUK12tCEA/1qQpaBR5E0yGCV7L2MZKLSCp/AJst2nN3UkEV8pmz9SUqCrOEZyvylLbq8JpA1SONSDFj6lhZIJaQSiRk2vuAyR0FbTMEi0eKhhPheQeUmmBCKclsy4gqGa9gh7vcRrbgg7HHab438tXDwjkrzrAPX0mA9eQBcFWpsMbghMdaeoZRbKTRsh6uphcRNOryz2SxLzXbnKCSqSPBJwpmss6ltNxLWfq+os3TplzA83qMnYdnwBu/cxbRBhj+lBgTVziaZmXXR500p8vQoU1UiplmJireRCsnO3ILDqDTKvr0y+Xkyo6e6OHwxl3sw+HEyRSnU17Z4+bOidDDRxc3TVjtYFaeDKgX+45g8Zxkn2uEYYrJrv+GFscDTx3bD089BEbFc+AS6zGHw61it68+ORUX1vzLSxC6tdu07erW53uoPNiR62/eYTHXRS8dGcPl6vMUm+Qy8Isc2h9IlYWs9CrqLbtA/lL+u/tuQfFbEbSqDq17cZyvYUfuFt2ePMxsXRYVe03zmPX4Ut39naqPLU8uSHDfFsRB3mYxunXz58/Y29+xI4fB760GY6NxquOwKWngB4fcWQdAPgm5bbAzvcDgcDofDlKrXfHt7q3c69e8/Ta948eAvTDqj3Wx7XCX8tuP01Foviu93V7vLRC7mmrBc3MPn/c4m/L13zHwXiNjS/BKVYPj5uGsas0Oh/PHu8+exa3wV5fh57/F1AXfZFUD1tIe3ZR+fGoPN+vAdH/ZHh+WuMZuubj731ZX9Iruna5mPg/eF510ltGu+11nvptfPTwUvkXbGV71bdh+Y9lpnfWVPVkLz3/WLTPZq+Kyl8xeti4tMjsCicRRe8raAUuM1E1ftXORWTxKOxNBJrlPs1yn8lGo/OSnLklTOJDEBP1LXbF0sBIhZzai962K1jEpfm4m7TXYyIpCmnrgfGptsT+/jUUIJX6AJtIW4JJ7uNOR+tndNU4FzmBmrazrnb74jtaKNUOhdOJpunufpq/Zi3zIEn6Puaf5ffiuM2p1HFg4/0Co68jp4IBbh04rl0io68jk9IraCJ0vKQFNjeRzjssziB46HSfaXXsSXHlnVA3HFatb7oOIOWvY6vHE+XVzz1x6tZ8h8ZTaynIvqvpR5BnnOmupidhpV2UGT+0heQJWrZGUXVRnwNiuXUYWN2Xg3fGR66ZhZKr6m3mImuQ3lbGfp9POXrjL4UhWgZrrOUOUdNfZthtIyGUffvHvWekisNv5knphu8zdbvu6K89M5OPvKCFs1URxPmN8JlAKONGz6NsoS5rNky/GiRavIYzSnVYWJ9XHK6aHczmvkqWjrUBC+kwF7ScBLsG9j6UgJ9g5zvJ2wQiLYOX6onfcYPcPj1Io5phMrjvkuelGwaOPQBXbXcl6B5sSNhVCRXF/khTmp4NtA4S+Rl5hyX3zmy5fgO4ahR0EZ8W7nJfIsFFB8ViNRwGEUVZJIOF+bXas59CXW5bzC75n4acEmUrGMhGPu/6iZ+AFskp0lISeMsThA95FGfi5x7y3IJgJDDBr4YvazcqAIcyDZU0K1Z84WrGt2lryI9ARgXbMX4rDFsNUHbWRoC9MzZwbQYSrtZOYzdDgfJsdPp/jL8GcYfw4cpk28BwGAvCxIXvNgxZU3hYIdyPmDDbiLhICWiExPE/1BnLmPmMIm4gSptYBQTRYgMUYZSkEHpEeQvQBkbweiAqcYcmsASwwrmdNQpTeN26mJtIZnKB4wrpHuwYY7GqrMNA5au0IVjQoIjGO6pUh7f8YHmbEGNBBDUo2cb+NjlaNU8F7GBqQk0UKb8WpfKFWVqvDCcHh5kTkUd1PBmTLEXFi6dhvCAaIEBd0HegUZMsMgmAy+qBwNg7mo19KFxhBofBkmHyj1GvgVcfhtyAxSJY9yMUzVjB5/Q94YrktfnwcsDkNL9v/38O3xN+SNqZ7fPP6KfDF3KBebsmA2Ii21w+FwOBwOh8PhcBSMf7xWYbuD7giaAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
          <p className="font-bold ">Continue as Guest</p>
        </div>
        <div onClick={() => close(false)} className="bg-red-500 text-white p-1 rounded-lg absolute top-4 right-4 cursor-pointer">
            Close
        </div>
      </div>
    </div>
  );
};

export default Signin;
