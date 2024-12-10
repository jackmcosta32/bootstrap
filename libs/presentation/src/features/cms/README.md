# Feature - CMS

## References

- N/A.

## System Requirements

### Functional Requirements:

- Drag-n-Drop: Add a drag-n-drop (DnD) tool for building custom landing pages dynamically
- Multiplayer: Allow for different people to edit the same document simultaneously

### Non-Functional Requirements:

- Performance: This tool should handle requests optimistically being as fast as possible on the front-end side
- Usability: This tool should support common DnD features like adding, deleting and moving, nodes
- Usability: This tool should support common editor features like reverting a change and re-doing a change

## Implementation Details:

### CMS Editor Controls:

Uses a pointer logic to traverse on a array list. The idea for this approach is to allow us to easily undo and re-do changes on the editor by simply updating a pointer value.

### CMS Component Tree:

- **Shallow Delete**: Deletes a node by toggling the isDeleted flag on the CMS Component. This is useful for enhancing the performance and memory management for undo/re-do operations.
