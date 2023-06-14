const DelHandler = (id) => {
    const newUser2 = user2.filter((user2) => user2.id !== id);
    setUser2(newUser2);
};

export default DelHandler;
