import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PreviewCard from "./PreviewCard";
import Form from "./Form";
// import background2 from "../images/MM.jpg";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      photo: {
        url: "",
        isAvatarDefault: false,
      },
      email: "",
      linkedin: "",
      github: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(img) {
    const { photo } = this.state;
    this.setState(() => {
      const newPhoto = { ...photo, url: img, isAvatarDefault: false };
      return {
        photo: newPhoto,
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        photo: "",
        email: "",
        linkedin: "",
        github: "",
      };
    });
  }

  handleChange(ev) {
    /*//
    const obj = {
      job: 'Developer'
    }
    //
    const obj = {};
    obj['job']='developer';
    //
    const obj = {};
    const objKey = 'job'
    obj[objKey]='developer';
    //
    const objKey = 'job'
    const obj = {
      [objKey]: value
    };
    //
    this.setState(obj)*/

    console.log("change", ev.currentTarget.id);
    console.log("change", ev.currentTarget.value);

    const atrib = ev.currentTarget.id;
    const value = ev.currentTarget.value;
    this.setState(() => {
      return {
        [atrib]: value,
      };
    });
  }
  render() {
    return (
      <>
        <Header></Header>
        <main className="main-all">
          <section className="main-all__photo main-all__img">
            <PreviewCard
              name={this.state.name}
              job={this.state.job}
              phone={this.state.phone}
              email={this.state.email}
              linkedin={this.state.linkedin}
              github={this.state.github}
              photo={this.state.photo.url}
              palette={this.state.palette}
              handleReset={this.handleReset}
            ></PreviewCard>
          </section>
          <section className="main-all__photo main-photo__design">
            <Form
              name={this.state.name}
              job={this.state.job}
              phone={this.state.phone}
              email={this.state.email}
              linkedin={this.state.linkedin}
              github={this.state.github}
              photo={this.state.photo}
              palette={this.state.palette}
              // inputValue={this.state}
              handleChange={this.handleChange}
              updateAvatar={this.updateAvatar}
            ></Form>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default CardGenerator;