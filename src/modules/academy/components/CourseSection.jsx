export default function CourseSection({
  title,
  children,
}) {
  return (
    <section
      className="academy-section"
      style={{
        marginTop: "24px",
        padding: "20px",
        border: "1px solid #2b3445",
        borderRadius: "12px",
        background: "#111827",
      }}
    >
      <h3
        style={{
          marginBottom: "16px",
          color: "#fff",
        }}
      >
        {title}
      </h3>

      {children}
    </section>
  );
}
