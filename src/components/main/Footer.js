import { Component } from "react";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: 1,
          name: "Home",
          link: "#",
          icon: "",
        },
        {
          id: 2,
          name: "About",
          link: "#",
          icon: "",
        },
        {
          id: 3,
          name: "Products",
          link: "#",
          icon: "",
        },
        {
          id: 4,
          name: "Blog",
          link: "#",
          icon: "",
        },
      ],

      details: [
        {
          id: 1,
          name: "title1",
          detail: "this is brief for component and it's goes on to next line",
        },
        {
          id: 2,
          name: "title2",
          detail: "this is brief for component and it's goes on to next line",
        },
        {
          id: 3,
          name: "title3",
          detail: "this is brief for component and it's goes on to next line",
        },
        {
          id: 4,
          name: "title4",
          detail: "this is brief for component and it's goes on to next line",
        },
      ],

      //   items: [
      //     {
      //       title: "Coffee",
      //       link: "https://example.com/coffee",
      //       description: "The best coffee in town!",
      //       icon: <FaCoffee />,
      //     },
      //     {
      //       title: "Beer",
      //       link: "https://example.com/beer",
      //       description: "Try our craft beers!",
      //       icon: <FaBeer />,
      //     },
      //   ],
    };
  }

  render() {
    return (
      <div className="block bg-black opacity-80">
        <div className="flex justify-center py-4 px-8 ">
          {/* first part */}
          <div className="block w-2/3 py-2">
            <ul className="p-0 m-0 flex justify-start gap-10 px-2 py-5">
              {this.state.lists.map((list) => {
                return (
                  <li
                    className="text-sm font-bold text-white text-center"
                    key={list.id}
                  >
                    {list.name}
                  </li>
                );
              })}
            </ul>
            <div className="flex ring-1 ring-gray-700 items-center">
              {this.state.details.map((detail) => {
                return (
                  <div
                    className="block px-4 ring-1 ring-gray-700 py-2"
                    key={detail.id}
                  >
                    <h3 className="text-sm font-medium tracking-wider text-white uppercase underline underline-offset-4 decoration-gray-300">
                      {detail.name}
                    </h3>
                    <p className="py-2 text-sm font-normal text-gray-400 tracking-wide leading-4">
                      {detail.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-5 py-4 text-gray-300">
            {
                
            }
              <div className="text-[20px]">
                <BiLogoFacebookCircle />
              </div>
              <div className="text-[20px]">
                <BiLogoLinkedinSquare />
              </div>
              <div className="text-[20px]">
                <BiLogoTwitter />
              </div>
            </div>
          </div>
          {/* first part end */}

          {/* second part */}
          <div className="w-1/3 h-auto flex justify-center items-center">
            <img
              src={require("../../assets/logo192.png")}
              alt=""
              className="h-28 mx-4"
            />
          </div>

          {/* second part end */}
        </div>

        {/* bottom part */}
        <div className="flex justify-center py-2 bg-gray-900">
          <p className="text-xs font-light text-white">
            &copy; All right reserved in Localhost
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
