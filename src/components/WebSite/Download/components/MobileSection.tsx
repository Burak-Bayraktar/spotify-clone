import { useUserOs } from 'hooks/useUserOs';

export const MobileSection = () => {
  const { allOsTypes } = useUserOs();

  return (
    <section className="download-page-section mobile-section">
      <h3 className="title">Müziğini cep telefonuna ve tablete de taşı.</h3>
      <p className="description">Telefonunda veya tabletinde dinlemek ücretsiz, kolay ve eğlencelidir.</p>
      <div className="mobile-section-badges">
        {allOsTypes.map((item) => {
          return (
            <a key={item.name} href={item.link as string}>
              {item.badge}
            </a>
          );
        })}
      </div>
    </section>
  );
};
