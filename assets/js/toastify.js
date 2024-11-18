(function (global) {
  // Define the basic Toastify object
  var Toastify = function (options) {
    return new Toastify.lib.init(options);
  };

  Toastify.lib = Toastify.prototype = {
    toastify: "1.0.0", // Version

    init: function (options) {
      this.options = options || {};
      this.toastElement = null;
      return this;
    },

    // Method to show the toast
    showToast: function () {
      this.toastElement = document.createElement("div");
      this.toastElement.className = "toastify";

      this.toastElement.innerText = this.options.text || "Toast message!";

      // Styling
      this.toastElement.style.position = "fixed";
      this.toastElement.style.top = "20px";
      this.toastElement.style.right = "20px";
      this.toastElement.style.padding = "10px 20px";
      this.toastElement.style.backgroundColor = this.options.backgroundColor || "#333";
      this.toastElement.style.color = "#fff";
      this.toastElement.style.borderRadius = "4px";
      this.toastElement.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
      this.toastElement.style.zIndex = "99999";

      document.body.appendChild(this.toastElement);

      var self = this;
      setTimeout(function () {
        self.removeElement();
      }, this.options.duration || 3000); // Default duration 3 seconds
    },

    // Method to remove the toast element
    removeElement: function () {
      if (this.toastElement) {
        this.toastElement.style.opacity = 0;
        setTimeout(() => {
          if (this.toastElement && this.toastElement.parentNode) {
            this.toastElement.parentNode.removeChild(this.toastElement);
          }
        }, 500); // Give time for fade-out effect
      }
    },
  };

  Toastify.lib.init.prototype = Toastify.lib;

  // Attach Toastify to global scope
  global.Toastify = Toastify;
})(window);
