"use client"

import {Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-modal";

export const StoreModal = () => {
	const storeModal = useStoreModal();
	return (
		<Modal
			title="Create Store"
			description={"Create a new Store"}
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			Create a new Store
		</Modal>
	)
}