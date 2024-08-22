import React, { useState, useEffect } from "react";
import { Partner, Sponsor } from "./types"; // Adjust the path to your types file
import styles from "./ManageEntities.module.css"; // Import CSS module

type EntityType = "partner" | "sponsor";

const ManageEntities: React.FC = () => {
  const [entities, setEntities] = useState<{
    partners: Partner[];
    sponsors: Sponsor[];
  }>({ partners: [], sponsors: [] });
  const [type, setType] = useState<EntityType>("partner");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchEntities("partner");
    fetchEntities("sponsor");
  }, []);

  const fetchEntities = (entityType: EntityType) => {
    fetch(`http://localhost:8081/${entityType}s`) // Adjusted to match the expected URL structure
      .then((response) => response.json())
      .then((data) =>
        setEntities((prev) => ({ ...prev, [`${entityType}s`]: data }))
      )
      .catch((error) => console.error(`Error fetching ${entityType}:`, error));
  };

  const handleAdd = () => {
    fetch(`http://localhost:8081/${type}s`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, logo_url: logoUrl }),
    })
      .then((response) => response.json())
      .then(() => {
        resetForm();
        fetchEntities(type);
      })
      .catch((error) => console.error(`Error adding ${type}:`, error));
  };

  const handleEdit = (id: number, entityType: EntityType) => {
    setType(entityType);
    setEditingId(id);
    const entity = entities[
      entityType === "partner" ? "partners" : "sponsors"
    ].find((e) => e.id === id);
    if (entity) {
      setName(entity.name);
      setDescription(entity.description);
      setLogoUrl(entity.logo_url);
    }
  };

  const handleSave = () => {
    if (editingId !== null) {
      fetch(`http://localhost:8081/${type}s/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, logo_url: logoUrl }),
      })
        .then(() => {
          resetForm();
          fetchEntities(type);
        })
        .catch((error) => console.error(`Error updating ${type}:`, error));
    }
  };

  const handleDelete = (id: number, entityType: EntityType) => {
    fetch(`http://localhost:8081/${entityType}s/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchEntities(entityType);
      })
      .catch((error) => console.error(`Error deleting ${entityType}:`, error));
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setLogoUrl("");
  };

  return (
    <div className={styles.manageContainer}>
      <h2>Manage Partners and Sponsors</h2>
      <div className={styles.formContainer}>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as EntityType)}
        >
          <option value="partner">Partner</option>
          <option value="sponsor">Sponsor</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Logo URL"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
        {editingId !== null ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
      <div className={styles.listsContainer}>
        <div className={styles.list}>
          <h3>Partners</h3>
          <ul className={styles.listContainer}>
            {entities.partners.map((partner) => (
              <li key={partner.id} className={styles.listItem}>
                <span className={styles.entityName}>{partner.name}</span>
                <div className={styles.actions}>
                  <button onClick={() => handleEdit(partner.id, "partner")}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(partner.id, "partner")}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <h3>Sponsors</h3>
          <ul className={styles.listContainer}>
            {entities.sponsors.map((sponsor) => (
              <li key={sponsor.id} className={styles.listItem}>
                <span className={styles.entityName}>{sponsor.name}</span>
                <div className={styles.actions}>
                  <button onClick={() => handleEdit(sponsor.id, "sponsor")}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(sponsor.id, "sponsor")}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageEntities;
