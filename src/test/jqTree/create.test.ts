import getGiven from "givens";

import "../../tree.jquery";
import exampleData from "../support/exampleData";

beforeEach(() => {
    $("body").append('<div id="tree1"></div>');
});

afterEach(() => {
    const $tree = $("#tree1");
    $tree.tree("destroy");
    $tree.remove();
});

describe("create with data", () => {
    interface Vars {
        $tree: JQuery;
    }

    const given = getGiven<Vars>();
    given("$tree", () => $("#tree1"));

    beforeEach(() => {
        given.$tree.tree({
            data: exampleData,
        });
    });

    it("creates a tree", () => {
        expect(given.$tree).toHaveTreeStructure([
            expect.objectContaining({
                children: [
                    expect.objectContaining({ name: "child1" }),
                    expect.objectContaining({ name: "child2" }),
                ],
                name: "node1",
                open: false,
                selected: false,
            }),
            expect.objectContaining({
                children: [
                    expect.objectContaining({
                        children: [expect.objectContaining({ name: "child3" })],
                        name: "node3",
                        open: false,
                    }),
                ],
                name: "node2",
                open: false,
                selected: false,
            }),
        ]);
    });
});
