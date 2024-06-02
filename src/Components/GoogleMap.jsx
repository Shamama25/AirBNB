// GoogleMap.js

export default function GoogleMap() {
  return (
    <div className="py-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9209530249395!2d-122.08424968469188!3d37.42206577982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c4b123aeb%3A0xa0b9c0ed01e345cb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1596497913075!5m2!1sen!2sus"
        width="600"
        height="720"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
