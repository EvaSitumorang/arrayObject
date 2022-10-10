import React from 'react';

function App() {
  const suppliers = [
    { id: 1, name: 'Vadasi' },
    { id: 2, name: 'Levinn' },
    { id: 3, name: 'Turner' },
  ];
  const Items = [
    { supplier_id: 1, product_name: 'Espresso', price: 21000 },
    { supplier_id: 1, product_name: 'Americano', price: 23000 },
    { supplier_id: 1, product_name: 'Macchiato', price: 25000 },
    { supplier_id: 2, product_name: 'Cappucino', price: 27000 },
    { supplier_id: 2, product_name: 'Americano', price: 23000 },
    { supplier_id: 2, product_name: 'Macchiato', price: 25000 },
    { supplier_id: 2, product_name: 'Frappe', price: 26000 },
    { supplier_id: 3, product_name: 'Espresso', price: 21000 },
    { supplier_id: 3, product_name: 'Frappe', price: 26000 },
    { supplier_id: 3, product_name: 'Americano', price: 23000 },
  ];

  const GroupBySupplier = suppliers.map((i) => {
    const supplieritem = Items.filter((e) => {
      return e.supplier_id === i.id;
    });
    return { supplierss: i, items: supplieritem };
  });
  console.log(GroupBySupplier);

  const GroupByItems = Items.map((i) => {
    const itemsupplier = suppliers.find((e) => {
      return e.id === i.supplier_id;
    });
    return { produk: i, suppliers: itemsupplier };
  });
  console.log(GroupByItems);

  let item1 = {};
  GroupByItems.forEach((i) => {
    if (item1[i.produk.product_name] === undefined) {
      item1[i.produk.product_name] = [];
    }
    item1[i.produk.product_name].push({ name: i.suppliers.name, price: i.produk.price });
  });

  let Item2 = [];
  Object.keys(item1).forEach((e) => {
    Item2.push({ product: e, item: item1[e] });
  });

  return (
    <div div className="p-10 flex">
      <div className="">
        <p className="text-xl">Group By Supplier</p>
        <table className="w-80 border">
          {GroupBySupplier.map((group) => {
            return (
              <>
                <thead>
                  <tr>{group.supplierss.name}</tr>
                </thead>
                <tbody>
                  <tr>
                    {group.items.map((list) => {
                      return (
                        <>
                          <tr>
                            <td className="px-10">{list.product_name}</td>
                            <td>{list.price}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>

      <div className="ml-40">
        <p className="text-xl">Group By Item</p>
        <table>
          {Item2.map((group) => {
            return (
              <>
                <thead>
                  <tr>{group.product}</tr>
                </thead>
                <tbody>
                  <tr>
                    {group.item.map((list) => {
                      return (
                        <>
                          <tr>
                            <td className="px-14">{list.name}</td>
                            <td>{list.price}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
