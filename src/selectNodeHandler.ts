import { GetNodeById } from "./jqtreeMethodTypes";
import { Node } from "./node";

interface SelectNodeHandlerParameters {
    getNodeById: GetNodeById;
}

export default class SelectNodeHandler {
    private getNodeById: GetNodeById;
    private selectedNodes: Set<NodeId>;
    private selectedSingleNode: Node | null;

    constructor({ getNodeById }: SelectNodeHandlerParameters) {
        this.getNodeById = getNodeById;
        this.selectedNodes = new Set<NodeId>();
        this.clear();
    }

    public addToSelection(node: Node): void {
        if (node.id != null) {
            this.selectedNodes.add(node.id);
        } else {
            this.selectedSingleNode = node;
        }
    }

    public clear(): void {
        this.selectedNodes.clear();
        this.selectedSingleNode = null;
    }

    public getSelectedNode(): false | Node {
        const selectedNodes = this.getSelectedNodes();

        if (selectedNodes.length) {
            return selectedNodes[0] ?? false;
        } else {
            return false;
        }
    }

    public getSelectedNodes(): Node[] {
        if (this.selectedSingleNode) {
            return [this.selectedSingleNode];
        } else {
            const selectedNodes: Node[] = [];

            this.selectedNodes.forEach((id) => {
                const node = this.getNodeById(id);
                if (node) {
                    selectedNodes.push(node);
                }
            });

            return selectedNodes;
        }
    }

    public getSelectedNodesUnder(parent: Node): Node[] {
        if (this.selectedSingleNode) {
            if (parent.isParentOf(this.selectedSingleNode)) {
                return [this.selectedSingleNode];
            } else {
                return [];
            }
        } else {
            const selectedNodes: Node[] = [];

            this.selectedNodes.forEach((id) => {
                const node = this.getNodeById(id);
                if (node && parent.isParentOf(node)) {
                    selectedNodes.push(node);
                }
            });

            return selectedNodes;
        }
    }

    public isNodeSelected(node: Node): boolean {
        if (node.id != null) {
            return this.selectedNodes.has(node.id);
        } else if (this.selectedSingleNode) {
            return this.selectedSingleNode.element === node.element;
        } else {
            return false;
        }
    }

    public removeFromSelection(node: Node, includeChildren = false): void {
        if (node.id == null) {
            if (
                this.selectedSingleNode &&
                node.element === this.selectedSingleNode.element
            ) {
                this.selectedSingleNode = null;
            }
        } else {
            this.selectedNodes.delete(node.id);

            if (includeChildren) {
                node.iterate(() => {
                    if (node.id != null) {
                        this.selectedNodes.delete(node.id);
                    }
                    return true;
                });
            }
        }
    }
}
