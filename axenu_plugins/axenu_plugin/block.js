var el = wp.element.createElement;

const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

wp.blocks.registerBlockType("shaiful-gutenberg/notice-block", {
  title: "Notice", // Block name visible to user

  icon: "lightbulb", // Toolbar icon can be either using WP Dashicons or custom SVG

  category: "common", // Under which category the block would appear

  attributes: {
    // The data this block will be storing

    // type: { type: "string", default: "default" }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

    title: { type: "string" }, // Notice box title in h4 tag

    content1: { type: "array", source: "children", selector: "p" }, /// Notice box content in p tag
    seperatorImageUrl: {
      attribute: "src",
      selector: ".card_seperator_image"
    },
    content2: { type: "array", source: "children", selector: "p" }, /// Notice box content in p tag
    imageText: { type: "string" },
    fullImageUrl: {
      attribute: "src",
      selector: ".card_full_image"
    },
    fullImageAlt: {
      attribute: "alt",
      selector: ".card_full_image"
    }
  },

  edit: function(props) {
    // How our block renders in the editor in edit mode

    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateImageText(event) {
      props.setAttributes({ imageText: event.target.value });
    }

    function updateContent1(newdata) {
      props.setAttributes({ content1: newdata });
    }
    function updateContent2(newdata) {
      props.setAttributes({ content2: newdata });
    }

    function fullImageSelected(media) {
      props.setAttributes({
        fullImageAlt: media.alt,
        fullImageUrl: media.url
      });
    }

    function renderImageButton(obj) {
      // if (props.attributes.fullImageUrl) {
      //   // return (
      //   //   <img
      //   //     src={attributes.fullImageUrl}
      //   //     onClick={openEvent}
      //   //     className="image"
      //   //   />
      //   // );
      //   el("input", {
      //     src: props.attributes.fullImageUrl,
      //     onClick: openEvent,
      //     className: "image"
      //   });
      // } else {
      //   return el(
      //     "div",
      //     {
      //       className: "button-container"
      //     },
      //     el(
      //       "Button",
      //       {
      //         onClick: openEvent,
      //         className: "button button-large"
      //       },
      //       "Pick an image"
      //     )
      //   );
      //   // <div className="button-container">
      //   //   <Button onClick={openEvent} className="button button-large">
      //   //     Pick an image
      //   //   </Button>
      //   // </div>
      // }
      return el(
        wp.components.Button,
        {
          className:
            "components-icon-button image-block-btn is-button is-default is-large",
          onClick: obj.open
        },
        el(
          "svg",
          { className: "dashicon dashicons-edit", width: "20", height: "20" },
          el("path", {
            d:
              "M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z"
          })
        ),
        el("span", {}, "Select image")
      );
    }

    // const getImageButton = openEvent => {
    // if (attributes.fullImageUrl) {
    //   return (
    //     <img
    //       src={attributes.fullImageUrl}
    //       onClick={openEvent}
    //       className="image"
    //     />
    //   );
    // } else {
    //   return (
    //     <div className="button-container">
    //       <Button onClick={openEvent} className="button button-large">
    //         Pick an image
    //       </Button>
    //     </div>
    //   );
    // }
    // };

    // function updateType(event) {
    //   props.setAttributes({ type: event.target.value });
    // }

    // return (
    //   <div className="container">
    //     <MediaUpload
    //       onSelect={media => {
    //         setAttributes({
    // fullImageAlt: media.alt,
    // card_full_image: media.url
    //         });
    //       }}
    //       type="image"
    //       value={attributes.imageID}
    //       render={({ open }) => getImageButton(open)}
    //     />
    //     <PlainText
    //       onChange={content => setAttributes({ title: content })}
    //       value={attributes.title}
    //       placeholder="Your card title"
    //       className="heading"
    //     />
    //     <RichText
    //       onChange={content => setAttributes({ content2: content })}
    //       value={attributes.content2}
    //       multiline="p"
    //       placeholder="Your card text"
    //     />
    //   </div>
    // );

    // return <p>Hello world</p>;

    return el(
      "div",
      {
        className: "notice-box notice-" + props.attributes.type
      },
      // el(
      //   "select",
      //   {
      //     onChange: updateType,
      //     value: props.attributes.type
      //   },
      //   el("option", { value: "default" }, "Default"),
      //   el("option", { value: "success" }, "Success"),
      //   el("option", { value: "danger" }, "Danger")
      // ),
      el("input", {
        type: "text",
        placeholder: "Enter title here...",
        value: props.attributes.title,
        onChange: updateTitle,
        style: { width: "100%" }
      }),
      el(wp.editor.RichText, {
        tagName: "p",
        onChange: updateContent1,
        value: props.attributes.content1,
        placeholder: "Enter description here..."
      }),
      el(wp.editor.RichText, {
        tagName: "p",
        onChange: updateContent2,
        value: props.attributes.content2,
        placeholder: "Enter description here..."
      }),
      el(wp.editor.MediaUpload, {
        onSelect: fullImageSelected,
        type: "image",
        value: props.attributes.fullImageUrl,
        render: renderImageButton
      }),
      el("input", {
        type: "text",
        placeholder: "Enter image text here...",
        value: props.attributes.imageText,
        onChange: updateImageText,
        style: { width: "100%" }
      })
    ); // End return
  },

  save: function(props) {
    // How our block renders on the frontend
    return el(
      "div",
      {
        className: "card"
      },
      el(
        "div",
        {
          className: "column"
        },
        el("h3", null, props.attributes.title),
        el("img", {
          src: "#",
          alt: "Icon divider"
        }),
        el(wp.editor.RichText.Content, {
          tagName: "p",
          value: props.attributes.content1
        }),
        el("img", {
          src: "#",
          alt: "Icon divider"
        }),
        el(wp.editor.RichText.Content, {
          tagName: "p",
          value: props.attributes.content2
        })
      ),
      el(
        "div",
        {
          className: "column full-image"
        },
        el("img", {
          src: props.attributes.fullImageUrl,
          alt: "Image of founder"
        }),
        el(
          "p",
          {
            className: "image-text"
          },
          props.attributes.imageText
        )
      )
      // el("p", null, props.attributes.title),
      // el(wp.editor.RichText.Content, {
      //   tagName: "p",
      //   value: props.attributes.content
      // })
    );
  }
});

// <div class="card">
//   <div class="column column-vertical">
//     <h3>About Axenu</h3>
//     <img src="#" alt="Icon divider" />
//     <p>
//       vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat
//     </p>
//     <img src="#" alt="Icon divider" />
//     <p>
//       vawe Duis egestas luctus tellus non sollicitudin. Morbi rutrum, risus a varius luctus, ipsum orci porta quam, ac eleifend felis orci blandit elit. Nunc blandit cursus dui, quis placerat risus elementum id. Donec ullamcorper placerat
//     </p>
//     <button type="button" name="button">Read our story</button>
//   </div>
//   <div class="column full-image">
//     <img src="#" alt="Image of founer"/>
//     <p class="image-text">
//       Simon Nilsson, CEO and founder of Axenu
//     </p>
//   </div>
// </div>
